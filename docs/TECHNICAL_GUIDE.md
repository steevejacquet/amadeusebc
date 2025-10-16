# Technical Implementation Guide

## Architecture Deep Dive

### Component Architecture
```
┌─────────────────────────────────────────────────────────┐
│                    Presentation Layer                   │
├─────────────────────────────────────────────────────────┤
│  React Dashboard  │  ServiceNow UI Pages  │  REST APIs │
├─────────────────────────────────────────────────────────┤
│                    Business Logic Layer                 │
├─────────────────────────────────────────────────────────┤
│  Fraud Detection  │  Alert Management  │  Notifications │
│   Business Rules  │    Workflows      │    & Reporting │
├─────────────────────────────────────────────────────────┤
│                     Security Layer                      │
├─────────────────────────────────────────────────────────┤
│      ACLs        │      Roles       │   Authentication │
├─────────────────────────────────────────────────────────┤
│                      Data Layer                         │
├─────────────────────────────────────────────────────────┤
│  Reservations    │  Fraud Alerts   │   Audit Logs     │
└─────────────────────────────────────────────────────────┘
```

## Fraud Detection Algorithm

### Core Logic Flow
```python
def detect_fraud(current_reservation):
    # 1. Extract reservation details
    hotel = current_reservation.hotel_name
    room_type = current_reservation.room_type
    price = current_reservation.daily_price
    date = current_reservation.booking_date
    
    # 2. Define comparison window
    cutoff_date = date - 30_days
    
    # 3. Query comparable reservations
    comparables = query_reservations(
        hotel=hotel,
        room_type=room_type,
        date_range=[cutoff_date, date],
        exclude=current_reservation.sys_id
    )
    
    # 4. Validate minimum data requirement
    if len(comparables) < 3:
        return None  # Insufficient data for analysis
    
    # 5. Calculate price statistics
    prices = [r.daily_price for r in comparables]
    avg_price = sum(prices) / len(prices)
    
    # 6. Compute anomaly percentage
    anomaly_pct = ((avg_price - price) / avg_price) * 100
    
    # 7. Classify severity and create alert
    if anomaly_pct >= 70:
        return create_alert(current_reservation, 'critical', anomaly_pct, prices)
    elif anomaly_pct >= 55:
        return create_alert(current_reservation, 'high', anomaly_pct, prices)
    elif anomaly_pct >= 40:
        return create_alert(current_reservation, 'medium', anomaly_pct, prices)
    else:
        return None  # Below threshold, no alert needed
```

### Performance Optimizations
- **Indexed Queries**: Database indexes on `hotel_name`, `room_type`, `booking_date`
- **Query Limits**: Maximum 100 comparable reservations per analysis
- **Date Windows**: Configurable lookback period (default: 30 days)
- **Caching**: Results cached for identical hotel/room combinations

## Database Design

### Table Relationships
```sql
x_snc_reservatio_2_reservation (1) ──→ (0..N) x_snc_reservatio_2_fraud_alert
    │                                           │
    ├── reservation_id (PK)                     ├── sys_id (PK)
    ├── hotel_name                              ├── reservation (FK)
    ├── room_type                               ├── alert_status
    ├── daily_price                             ├── severity
    ├── booking_date                            ├── explanation
    └── customer_id                             └── detected_price_anomaly
```

### Index Strategy
```sql
-- Primary performance indexes
CREATE INDEX idx_reservation_hotel_room ON x_snc_reservatio_2_reservation (hotel_name, room_type);
CREATE INDEX idx_reservation_date ON x_snc_reservatio_2_reservation (booking_date);
CREATE INDEX idx_alert_status_severity ON x_snc_reservatio_2_fraud_alert (alert_status, severity);
CREATE INDEX idx_alert_created ON x_snc_reservatio_2_fraud_alert (sys_created_on);
```

## Security Implementation

### Access Control Matrix
| Object | Read | Write | Create | Delete | Role Required |
|--------|------|-------|--------|---------|---------------|
| Reservations | ✅ | ✅ | ✅ | ❌ | admin/user |
| Fraud Alerts | ✅ | ✅ | ✅ | ✅ | fraud_monitoring_agent |
| Dashboard | ✅ | ❌ | ❌ | ❌ | fraud_monitoring_agent |

### ACL Implementation
```javascript
// Example ACL for fraud alert read access
{
  type: 'record',
  table: 'x_snc_reservatio_2_fraud_alert',
  operation: 'read',
  roles: ['x_snc_reservatio_2.fraud_monitoring_agent'],
  script: null,
  condition: null,
  active: true
}
```

## API Specifications

### REST Endpoints

#### Fraud Alerts API
```http
GET /api/now/table/x_snc_reservatio_2_fraud_alert
Content-Type: application/json
X-UserToken: {session_token}

Response:
{
  "result": [
    {
      "sys_id": "abc123...",
      "alert_status": "open",
      "severity": "critical", 
      "explanation": "Severe price anomaly detected...",
      "detected_price_anomaly": "74.5",
      "sys_created_on": "2025-10-15 09:22:54"
    }
  ]
}
```

#### Statistics Endpoint
```javascript
// Custom dashboard statistics
const getAlertStats = async () => {
  const queries = {
    total: 'alert_status!=closed^alert_status!=resolved',
    critical: 'alert_status!=closed^alert_status!=resolved^severity=critical',
    high: 'alert_status!=closed^alert_status!=resolved^severity=high'
  };
  
  const stats = {};
  for (const [key, query] of Object.entries(queries)) {
    const response = await fetch(
      `/api/now/table/x_snc_reservatio_2_fraud_alert?sysparm_query=${query}`,
      { headers: { 'X-UserToken': window.g_ck } }
    );
    const data = await response.json();
    stats[key] = data.result.length;
  }
  return stats;
};
```

## Frontend Architecture

### React Component Hierarchy
```
App
├── Dashboard
│   ├── StatsGrid
│   │   ├── StatCard (Total)
│   │   ├── StatCard (Critical)
│   │   ├── StatCard (High)
│   │   └── StatCard (Medium)
│   └── RecentAlerts
│       └── AlertCard[]
├── AlertsList
│   ├── SearchBar
│   ├── FilterControls
│   └── AlertsTable
│       └── AlertRow[]
└── AlertModal
    ├── AlertDetails
    ├── AlertActions
    └── StatusUpdater
```

### State Management
```javascript
// Main application state
const [alerts, setAlerts] = useState([]);
const [stats, setStats] = useState({ total: 0, critical: 0, high: 0, medium: 0 });
const [currentView, setCurrentView] = useState('dashboard');
const [selectedAlert, setSelectedAlert] = useState(null);
const [filters, setFilters] = useState({ severity: 'all', status: 'open' });
```

### Data Flow
```javascript
// Unidirectional data flow
User Action → Event Handler → API Call → State Update → UI Re-render

// Example: Alert status update
onClick(alertId, newStatus) → 
  updateAlertStatus(alertId, newStatus) → 
    PATCH /api/now/table/... → 
      loadAlerts() → 
        setAlerts(newData) → 
          UI reflects updated status
```

## Business Rule Implementation

### Trigger Configuration
```javascript
// Business rule metadata
{
  name: 'Reservation Fraud Detection',
  table: 'x_snc_reservatio_2_reservation',
  when: 'after',           // Execute after database operation
  action: ['insert', 'update'],  // Trigger on create/modify
  order: 100,              // Execution order
  active: true,            // Rule is enabled
  script: detectFraudulentReservation  // Main logic function
}
```

### Error Handling Strategy
```javascript
export function detectFraudulentReservation(current, previous) {
  try {
    // Core fraud detection logic
    const result = analyzePriceAnomaly(current);
    
    if (result.isFraudulent) {
      createFraudAlert(current, result);
      logFraudDetection(current, result);
    }
    
  } catch (error) {
    // Comprehensive error logging
    gs.error(`Fraud Detection Error for reservation ${current.getValue('reservation_id')}: ${error.message}`);
    gs.error(`Stack trace: ${error.stack}`);
    
    // Continue processing - don't block legitimate reservations
    return;
  }
}
```

## Monitoring and Observability

### Key Metrics
- **Alert Generation Rate**: Alerts created per day/hour
- **False Positive Rate**: Resolved alerts vs. confirmed fraud
- **Investigation Time**: Average time from alert to resolution
- **System Performance**: Business rule execution time

### Logging Strategy
```javascript
// Structured logging for observability
const logFraudDetection = (reservation, result) => {
  const logData = {
    reservation_id: reservation.getValue('reservation_id'),
    hotel: reservation.getValue('hotel_name'),
    room_type: reservation.getValue('room_type'),
    price: reservation.getValue('daily_price'),
    anomaly_percentage: result.anomaly,
    severity: result.severity,
    comparable_count: result.comparableCount,
    timestamp: new Date().toISOString()
  };
  
  gs.info(`Fraud Alert Generated: ${JSON.stringify(logData)}`);
};
```

### Performance Monitoring
```sql
-- Query performance analysis
SELECT 
  table_name,
  avg_execution_time,
  max_execution_time,
  query_count
FROM sys_query_performance 
WHERE table_name LIKE '%x_snc_reservatio_2%'
ORDER BY avg_execution_time DESC;
```

## Deployment Architecture

### Environment Strategy
```
Development → Testing → Staging → Production
     ↓           ↓         ↓          ↓
   Dev DB    Test DB   Stage DB   Prod DB
     ↓           ↓         ↓          ↓
  Unit Tests  Integration  UAT     Monitoring
             Tests                & Alerts
```

### Deployment Checklist
- [ ] Database schema changes applied
- [ ] Business rules activated
- [ ] ACLs and roles configured
- [ ] Sample data loaded (staging only)
- [ ] UI pages accessible
- [ ] Performance benchmarks met
- [ ] Security scan passed
- [ ] Documentation updated

## Troubleshooting Procedures

### Common Issues and Solutions

#### Business Rule Performance
```sql
-- Identify slow-running business rules
SELECT script_name, average_execution_time, max_execution_time
FROM sys_execution_tracker
WHERE script_name = 'Reservation Fraud Detection'
ORDER BY max_execution_time DESC;
```

#### Data Quality Issues
```javascript
// Validate data integrity
const validateReservationData = () => {
  const issues = [];
  
  // Check for missing required fields
  const invalidReservations = new GlideRecord('x_snc_reservatio_2_reservation');
  invalidReservations.addNullQuery('hotel_name');
  invalidReservations.query();
  
  if (invalidReservations.hasNext()) {
    issues.push('Found reservations with missing hotel names');
  }
  
  // Check for price anomalies
  const zeroPriceReservations = new GlideRecord('x_snc_reservatio_2_reservation');
  zeroPriceReservations.addQuery('daily_price', '<=', 0);
  zeroPriceReservations.query();
  
  if (zeroPriceReservations.hasNext()) {
    issues.push('Found reservations with zero or negative prices');
  }
  
  return issues;
};
```

#### Memory and Resource Management
```javascript
// Optimize memory usage in business rules
const analyzePriceAnomaly = (current) => {
  let gr = null;
  try {
    gr = new GlideRecord('x_snc_reservatio_2_reservation');
    // Configure query with limits
    gr.setLimit(100);  // Prevent excessive memory usage
    gr.addQuery('hotel_name', current.getValue('hotel_name'));
    // ... query logic
    
    return processResults(gr);
  } finally {
    // Ensure cleanup
    if (gr) {
      gr = null;
    }
  }
};
```

---

*Technical Implementation Guide v1.0*  
*For ServiceNow Developers and System Architects*