import React, { useState, useEffect } from 'react';
import { display, value } from './utils/fields.js';
import './app.css';

export default function App() {
  const [alerts, setAlerts] = useState([]);
  const [stats, setStats] = useState({ total: 0, critical: 0, high: 0, medium: 0, low: 0 });
  const [currentView, setCurrentView] = useState('dashboard');
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState('sys_created_on');
  const [sortOrder, setSortOrder] = useState('desc');
  const [selectedAlert, setSelectedAlert] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [filter, setFilter] = useState('all');

  const loadAlerts = async (queryFilter = '') => {
    try {
      setLoading(true);
      let url = `/api/now/table/x_snc_reservatio_2_fraud_alert?sysparm_display_value=all&sysparm_limit=100`;
      if (queryFilter) {
        url += `&sysparm_query=${queryFilter}`;
      }
      
      const response = await fetch(url, {
        headers: {
          "Accept": "application/json",
          "X-UserToken": window.g_ck
        }
      });
      
      if (!response.ok) throw new Error('Failed to load alerts');
      
      const data = await response.json();
      setAlerts(data.result || []);
    } catch (error) {
      console.error('Error loading alerts:', error);
      setAlerts([]);
    } finally {
      setLoading(false);
    }
  };

  const loadStats = async () => {
    try {
      // Get detailed stats by severity
      const queries = {
        total: `alert_status!=closed^alert_status!=resolved`,
        critical: `alert_status!=closed^alert_status!=resolved^severity=critical`,
        high: `alert_status!=closed^alert_status!=resolved^severity=high`,
        medium: `alert_status!=closed^alert_status!=resolved^severity=medium`,
        low: `alert_status!=closed^alert_status!=resolved^severity=low`
      };

      const statsPromises = Object.entries(queries).map(async ([key, query]) => {
        const response = await fetch(
          `/api/now/table/x_snc_reservatio_2_fraud_alert?sysparm_query=${query}&sysparm_display_value=all`,
          {
            headers: {
              "Accept": "application/json",
              "X-UserToken": window.g_ck
            }
          }
        );
        const data = await response.json();
        return [key, data.result?.length || 0];
      });

      const results = await Promise.all(statsPromises);
      const newStats = Object.fromEntries(results);
      setStats(newStats);
    } catch (error) {
      console.error('Error loading stats:', error);
      setStats({ total: 0, critical: 0, high: 0, medium: 0, low: 0 });
    }
  };

  useEffect(() => {
    loadStats();
    if (currentView === 'dashboard') {
      loadAlerts('alert_status!=closed^alert_status!=resolvedORDERBYDESCsys_created_on');
    }
  }, [currentView]);

  const applyFilters = () => {
    let query = 'alert_status!=closed^alert_status!=resolved';
    
    if (filter === 'critical') {
      query += '^severity=critical';
    } else if (filter === 'high') {
      query += '^severity=high';
    } else if (filter === 'medium') {
      query += '^severity=medium';
    } else if (filter === 'low') {
      query += '^severity=low';
    }

    query += `ORDERBY${sortOrder === 'desc' ? 'DESC' : ''}${sortField}`;
    loadAlerts(query);
  };

  useEffect(() => {
    if (currentView !== 'dashboard') {
      applyFilters();
    }
  }, [filter, sortField, sortOrder, currentView]);

  const filteredAlerts = alerts.filter(alert => {
    if (!searchTerm) return true;
    const searchLower = searchTerm.toLowerCase();
    return (
      display(alert.explanation).toLowerCase().includes(searchLower) ||
      display(alert.hotel_name).toLowerCase().includes(searchLower) ||
      display(alert.severity).toLowerCase().includes(searchLower) ||
      display(alert.alert_status).toLowerCase().includes(searchLower)
    );
  });

  const updateAlertStatus = async (alertId, newStatus) => {
    try {
      const response = await fetch(`/api/now/table/x_snc_reservatio_2_fraud_alert/${alertId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'X-UserToken': window.g_ck
        },
        body: JSON.stringify({ alert_status: newStatus })
      });

      if (response.ok) {
        loadStats();
        if (currentView !== 'dashboard') {
          applyFilters();
        } else {
          loadAlerts('alert_status!=closed^alert_status!=resolvedORDERBYDESCsys_created_on');
        }
        setShowModal(false);
      }
    } catch (error) {
      console.error('Error updating alert:', error);
    }
  };

  const getSeverityClass = (severity) => {
    const severityValue = display(severity).toLowerCase();
    return `severity-${severityValue}`;
  };

  const getSeverityIcon = (severity) => {
    const severityValue = display(severity).toLowerCase();
    switch (severityValue) {
      case 'critical': return '🚨';
      case 'high': return '⚠️';
      case 'medium': return '⚡';
      case 'low': return 'ℹ️';
      default: return '📋';
    }
  };

  const formatDate = (dateStr) => {
    return new Date(display(dateStr)).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const AlertModal = () => {
    if (!selectedAlert || !showModal) return null;

    return (
      <div className="modal-overlay" onClick={() => setShowModal(false)}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          <div className="modal-header">
            <h3>Alert Details</h3>
            <button className="modal-close" onClick={() => setShowModal(false)}>×</button>
          </div>
          
          <div className="modal-body">
            <div className="alert-detail-grid">
              <div className="detail-item">
                <label>Severity</label>
                <span className={`severity-badge ${getSeverityClass(selectedAlert.severity)}`}>
                  {getSeverityIcon(selectedAlert.severity)} {display(selectedAlert.severity).toUpperCase()}
                </span>
              </div>
              
              <div className="detail-item">
                <label>Status</label>
                <span className="status-badge">{display(selectedAlert.alert_status)}</span>
              </div>
              
              <div className="detail-item">
                <label>Price Anomaly</label>
                <span className="anomaly-value">{display(selectedAlert.detected_price_anomaly)}%</span>
              </div>
              
              <div className="detail-item full-width">
                <label>Explanation</label>
                <p>{display(selectedAlert.explanation)}</p>
              </div>
              
              <div className="detail-item full-width">
                <label>Recommended Action</label>
                <p>{display(selectedAlert.recommended_action)}</p>
              </div>
              
              <div className="detail-item full-width">
                <label>Comparable Prices</label>
                <p>{display(selectedAlert.comparable_prices)}</p>
              </div>
            </div>
          </div>
          
          <div className="modal-footer">
            <button 
              className="btn btn-success"
              onClick={() => updateAlertStatus(value(selectedAlert.sys_id), 'investigating')}
            >
              Mark as Investigating
            </button>
            <button 
              className="btn btn-warning"
              onClick={() => updateAlertStatus(value(selectedAlert.sys_id), 'resolved')}
            >
              Mark as Resolved
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderDashboard = () => (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>🛡️ Fraud Detection Dashboard</h1>
        <div className="header-actions">
          <button className="btn btn-primary" onClick={() => window.location.reload()}>
            🔄 Refresh
          </button>
        </div>
      </div>
      
      <div className="stats-grid">
        <div className="stat-card total-alerts">
          <div className="stat-icon">📊</div>
          <div className="stat-content">
            <div className="stat-number">{stats.total}</div>
            <div className="stat-label">Total Open Alerts</div>
          </div>
          <button className="stat-button" onClick={() => {
            setCurrentView('all-alerts');
            setFilter('all');
          }}>
            View All →
          </button>
        </div>
        
        <div className="stat-card critical-alerts">
          <div className="stat-icon">🚨</div>
          <div className="stat-content">
            <div className="stat-number critical">{stats.critical}</div>
            <div className="stat-label">Critical Alerts</div>
          </div>
          <button className="stat-button critical" onClick={() => {
            setCurrentView('alerts');
            setFilter('critical');
          }}>
            Investigate →
          </button>
        </div>
        
        <div className="stat-card high-alerts">
          <div className="stat-icon">⚠️</div>
          <div className="stat-content">
            <div className="stat-number high">{stats.high}</div>
            <div className="stat-label">High Priority</div>
          </div>
          <button className="stat-button high" onClick={() => {
            setCurrentView('alerts');
            setFilter('high');
          }}>
            Review →
          </button>
        </div>
        
        <div className="stat-card medium-alerts">
          <div className="stat-icon">⚡</div>
          <div className="stat-content">
            <div className="stat-number medium">{stats.medium}</div>
            <div className="stat-label">Medium Priority</div>
          </div>
          <button className="stat-button medium" onClick={() => {
            setCurrentView('alerts');
            setFilter('medium');
          }}>
            Monitor →
          </button>
        </div>
      </div>
      
      <div className="recent-alerts-section">
        <div className="section-header">
          <h2>📈 Recent Alerts</h2>
          <select 
            className="sort-select"
            value={`${sortField}-${sortOrder}`}
            onChange={(e) => {
              const [field, order] = e.target.value.split('-');
              setSortField(field);
              setSortOrder(order);
            }}
          >
            <option value="sys_created_on-desc">Newest First</option>
            <option value="sys_created_on-asc">Oldest First</option>
            <option value="detected_price_anomaly-desc">Highest Anomaly</option>
            <option value="severity-desc">Highest Severity</option>
          </select>
        </div>
        
        {loading ? (
          <div className="loading">
            <div className="loading-spinner"></div>
            Loading alerts...
          </div>
        ) : alerts.length === 0 ? (
          <div className="no-alerts">
            <div className="no-alerts-icon">🎉</div>
            <h3>No Recent Alerts</h3>
            <p>Great! No fraudulent activities detected recently.</p>
          </div>
        ) : (
          <div className="alerts-grid">
            {alerts.slice(0, 6).map(alert => (
              <div 
                key={value(alert.sys_id)} 
                className={`alert-card ${getSeverityClass(alert.severity)}`}
                onClick={() => {
                  setSelectedAlert(alert);
                  setShowModal(true);
                }}
              >
                <div className="alert-card-header">
                  <span className="alert-severity">
                    {getSeverityIcon(alert.severity)} {display(alert.severity).toUpperCase()}
                  </span>
                  <span className="alert-time">{formatDate(alert.sys_created_on)}</span>
                </div>
                
                <div className="alert-card-body">
                  <div className="alert-explanation">{display(alert.explanation)}</div>
                  
                  <div className="alert-metrics">
                    <div className="metric">
                      <span className="metric-label">Anomaly</span>
                      <span className="metric-value">{display(alert.detected_price_anomaly)}%</span>
                    </div>
                    <div className="metric">
                      <span className="metric-label">Status</span>
                      <span className={`status-badge status-${display(alert.alert_status)}`}>
                        {display(alert.alert_status)}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="alert-card-footer">
                  <span className="view-details">Click for details →</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  const renderAlertsList = (title) => (
    <div className="alerts-page">
      <div className="page-header">
        <div className="page-title">
          <button onClick={() => setCurrentView('dashboard')} className="back-button">
            ← Back
          </button>
          <h1>{title}</h1>
        </div>
        
        <div className="page-actions">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search alerts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
          
          <select 
            className="filter-select"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All Severities</option>
            <option value="critical">Critical Only</option>
            <option value="high">High Only</option>
            <option value="medium">Medium Only</option>
            <option value="low">Low Only</option>
          </select>
        </div>
      </div>
      
      {loading ? (
        <div className="loading">
          <div className="loading-spinner"></div>
          Loading alerts...
        </div>
      ) : filteredAlerts.length === 0 ? (
        <div className="no-alerts">
          <div className="no-alerts-icon">🔍</div>
          <h3>No Alerts Found</h3>
          <p>No alerts match your current filters.</p>
        </div>
      ) : (
        <div className="alerts-table-container">
          <table className="alerts-table">
            <thead>
              <tr>
                <th>Severity</th>
                <th>Status</th>
                <th>Explanation</th>
                <th>Anomaly %</th>
                <th>Comparable Prices</th>
                <th>Created</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredAlerts.map(alert => (
                <tr key={value(alert.sys_id)} className={getSeverityClass(alert.severity)}>
                  <td>
                    <span className={`severity-badge ${getSeverityClass(alert.severity)}`}>
                      {getSeverityIcon(alert.severity)} {display(alert.severity).toUpperCase()}
                    </span>
                  </td>
                  <td>
                    <span className={`status-badge status-${display(alert.alert_status)}`}>
                      {display(alert.alert_status)}
                    </span>
                  </td>
                  <td className="explanation-cell">{display(alert.explanation)}</td>
                  <td>
                    <span className="anomaly-percentage">{display(alert.detected_price_anomaly)}%</span>
                  </td>
                  <td className="prices-cell">{display(alert.comparable_prices)}</td>
                  <td>{formatDate(alert.sys_created_on)}</td>
                  <td>
                    <button 
                      className="btn btn-sm btn-primary"
                      onClick={() => {
                        setSelectedAlert(alert);
                        setShowModal(true);
                      }}
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );

  return (
    <div className="fraud-detection-app">
      {currentView === 'dashboard' && renderDashboard()}
      {currentView === 'all-alerts' && renderAlertsList('All Open Alerts')}
      {currentView === 'alerts' && renderAlertsList(`${filter.charAt(0).toUpperCase() + filter.slice(1)} Priority Alerts`)}
      <AlertModal />
    </div>
  );
}