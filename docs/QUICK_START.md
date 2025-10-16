# Quick Start Guide - Reservation Fraud Detection System

## 🚀 Get Started in 5 Minutes

### For Fraud Monitoring Agents

#### 1. Access the Dashboard
Navigate to: **[Fraud Detection Dashboard](https://steeve.amadeussbx.devsandboxes.service-now.com/x_snc_reservatio_2_fraud_dashboard.do)**

#### 2. Dashboard Overview
The dashboard shows:
- **📊 Total Open Alerts**: All unresolved fraud cases
- **🚨 Critical Alerts**: Immediate attention required (click to investigate)
- **⚠️ High Priority**: Priority investigation needed
- **⚡ Medium Priority**: Standard review required

#### 3. Investigate an Alert
1. **Click any alert card** to open detailed investigation view
2. **Review the explanation**: Understand why the alert was triggered
3. **Check comparable prices**: See market rate context
4. **Take action**: Update status to "Investigating" → "Resolved"

#### 4. Alert Severity Guide
- **🚨 Critical (70%+ below average)**: Contact customer immediately
- **⚠️ High (55-69% below)**: Verify payment method & history  
- **⚡ Medium (40-54% below)**: Check for promotional rates
- **ℹ️ Low (<40% below)**: Monitor for patterns

### For System Administrators

#### 1. Verify Installation
- ✅ Check role assignment: `x_snc_reservatio_2.fraud_monitoring_agent`
- ✅ Test business rule: Create suspicious reservation
- ✅ Confirm ACL protection: Non-agents cannot access alerts

#### 2. Monitor System Health
- **Business Rules**: System Definition → Business Rules → "Reservation Fraud Detection"
- **Data Quality**: Check reservation data completeness
- **Performance**: Monitor alert generation patterns

#### 3. User Management
1. Navigate to **User Administration → Roles**
2. Find `x_snc_reservatio_2.fraud_monitoring_agent`
3. Assign to fraud investigation team members

### Key Features at a Glance

| Feature | Description | Access Level |
|---------|-------------|--------------|
| **Automated Detection** | Business rule analyzes all reservations | System |
| **Severity Classification** | 4-level priority system | All Users |
| **Interactive Dashboard** | Modern UI with real-time stats | Fraud Agents |
| **Alert Management** | Full investigation lifecycle | Fraud Agents |
| **Search & Filter** | Advanced alert filtering | Fraud Agents |
| **Security Controls** | Role-based access protection | Admin |

### Common Tasks

#### Create Test Alert
1. Go to **Reservation Management**
2. Create new reservation with price 50%+ below normal
3. Alert should auto-generate within minutes
4. Check dashboard for new alert

#### Update Alert Status
1. Click alert card on dashboard
2. In modal, click "Mark as Investigating"
3. Add notes in investigation field
4. When complete, mark as "Resolved"

#### Generate Reports
1. Access **Fraud Alert Management** table
2. Use filters to select date range/severity
3. Export to Excel for reporting
4. Create custom views for regular reports

### Troubleshooting Quick Fixes

| Problem | Quick Solution |
|---------|----------------|
| Dashboard won't load | Check user has fraud_monitoring_agent role |
| No alerts generating | Verify business rule is active |
| Can't update alerts | Confirm user permissions are correct |
| Missing data | Check reservation records exist |

### Support Contacts
- **Technical Issues**: ServiceNow Admin Team
- **Process Questions**: Fraud Investigation Manager
- **Training Requests**: Application Development Team

---
*Need more detail? See the [Complete Documentation](README.md)*