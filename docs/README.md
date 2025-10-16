# Reservation Fraud Detection System - Complete Documentation

## Table of Contents
- [Overview](#overview)
- [Architecture](#architecture)
- [Installation & Setup](#installation--setup)
- [User Guide](#user-guide)
- [Technical Documentation](#technical-documentation)
- [API Reference](#api-reference)
- [Configuration](#configuration)
- [Troubleshooting](#troubleshooting)
- [Development Guide](#development-guide)

---

## Overview

### Purpose
The Reservation Fraud Detection System is an enterprise-grade ServiceNow application designed to automatically detect and alert on potentially fraudulent hotel reservation bookings. The system identifies reservations with prices significantly below market averages and provides fraud monitoring agents with comprehensive investigation tools.

### Key Features
- **Intelligent Fraud Detection**: Automated analysis of price anomalies vs. historical data
- **Multi-Level Severity System**: Critical, High, Medium, and Low priority classifications
- **Real-time Monitoring Dashboard**: Professional UI for fraud investigation teams
- **Role-Based Access Control**: Secure access limited to authorized fraud monitoring agents
- **Comprehensive Alert Management**: Full lifecycle management from detection to resolution
- **Interactive Reporting**: Drill-down capabilities and detailed investigation workflows

### Business Value
- **Fraud Prevention**: Proactive identification of suspicious booking patterns
- **Risk Mitigation**: Early detection reduces financial exposure
- **Operational Efficiency**: Automated monitoring reduces manual oversight requirements
- **Compliance Support**: Audit trail and documentation for regulatory requirements
- **Cost Savings**: Prevention of fraudulent transactions and associated losses

---

## Architecture

### System Components

#### 1. Data Layer
**Reservation Table** (`x_snc_reservatio_2_reservation`)
- Stores hotel booking information
- Fields: reservation_id, hotel_name, room_type, daily_price, booking_date, customer_id
- Enables historical price analysis and trend detection

**Fraud Alert Table** (`x_snc_reservatio_2_fraud_alert`)
- Stores detected fraud alerts and investigation details
- Fields: alert_status, severity, explanation, recommended_action, detected_price_anomaly, comparable_prices
- Links to originating reservation records

#### 2. Business Logic Layer
**Fraud Detection Business Rule**
- Triggers on reservation insert/update operations
- Analyzes price patterns within 30-day historical windows
- Calculates percentage deviations from average market prices
- Generates contextual alerts with severity classification

**Severity Classification Algorithm**
- **Critical (70%+ below average)**: Immediate investigation required
- **High (55-69% below average)**: Priority investigation needed
- **Medium (40-54% below average)**: Standard review process
- **Low (<40% below average)**: Monitor for patterns

#### 3. Security Layer
**Role-Based Access Control (RBAC)**
- `x_snc_reservatio_2.fraud_monitoring_agent` role
- Granular ACL protection on fraud alert tables
- Secure access to investigation tools and sensitive data

#### 4. Presentation Layer
**React-Based Dashboard**
- Modern, responsive web interface
- Real-time statistics and alert management
- Interactive filtering, sorting, and search capabilities
- Professional enterprise-grade UI/UX design

### Technology Stack
- **Backend**: ServiceNow Fluent DSL (TypeScript-based)
- **Frontend**: React 18.2.0 with modern JavaScript
- **Database**: ServiceNow platform tables
- **Authentication**: ServiceNow native authentication
- **APIs**: ServiceNow Table API with REST endpoints

---

## Installation & Setup

### Prerequisites
- ServiceNow instance (Orlando release or later)
- Admin rights for application installation
- ServiceNow SDK 4.0.2 or later for development

### Installation Steps

#### 1. Application Deployment
```bash
# Clone or download application files
# Deploy using ServiceNow SDK
npm run deploy
```

#### 2. Role Assignment
1. Navigate to **User Administration > Roles**
2. Locate `x_snc_reservatio_2.fraud_monitoring_agent` role
3. Assign role to appropriate users/groups

#### 3. Initial Configuration
1. **Access the application**:
   - Dashboard: `https://[instance].service-now.com/x_snc_reservatio_2_fraud_dashboard.do`
   - Reservation Management: `https://[instance].service-now.com/x_snc_reservatio_2_reservation_list.do`
   - Alert Management: `https://[instance].service-now.com/x_snc_reservatio_2_fraud_alert_list.do`

2. **Verify Data Tables**:
   - Confirm reservation and fraud alert tables are accessible
   - Test business rule functionality with sample data

#### 4. User Training
- Provide fraud monitoring agents with dashboard training
- Establish investigation workflows and escalation procedures
- Configure notification preferences (optional)

### Post-Installation Verification
1. **Create Test Reservation**: Add a reservation with normal pricing
2. **Create Suspicious Reservation**: Add reservation 50%+ below market rate
3. **Verify Alert Generation**: Confirm fraud alert is automatically created
4. **Test Dashboard Access**: Ensure proper role-based access control
5. **Validate Workflows**: Test complete investigation lifecycle

---

## User Guide

### For Fraud Monitoring Agents

#### Dashboard Overview
The main dashboard provides comprehensive fraud monitoring capabilities:

**Statistics Cards**
- **Total Open Alerts**: Shows all unresolved fraud alerts
- **Critical Alerts**: Immediate attention required (70%+ price deviation)
- **High Priority**: Priority investigation needed (55-69% deviation)  
- **Medium Priority**: Standard review required (40-54% deviation)

**Recent Alerts Section**
- Displays newest fraud alerts with severity indicators
- Click any alert card for detailed investigation view
- Color-coded severity system for quick triage

#### Alert Investigation Workflow

##### 1. Alert Triage
- Review alert severity and explanation
- Check comparable pricing data for context
- Examine reservation details and customer information

##### 2. Investigation Process
- **Critical Alerts**: Immediate customer contact and verification
- **High Alerts**: Priority review of payment methods and history
- **Medium Alerts**: Standard verification of promotional rates
- **Low Alerts**: Monitor for patterns, document findings

##### 3. Status Management
Use the alert detail modal to update investigation status:
- **Open**: New alert requiring attention
- **Investigating**: Active investigation in progress
- **Resolved**: Investigation complete, no fraud detected
- **Closed**: Confirmed fraud or case resolved

##### 4. Documentation
- Record investigation findings in alert comments
- Update recommended actions based on discoveries
- Maintain audit trail for compliance purposes

#### Advanced Features

**Search and Filtering**
- Search alerts by explanation, hotel name, or severity
- Filter by severity level (All, Critical, High, Medium, Low)
- Sort by creation date, severity, or anomaly percentage

**Bulk Operations**
- Mark multiple alerts for batch processing
- Export alert data for reporting purposes
- Generate investigation summaries

### For System Administrators

#### Monitoring System Health
- Review business rule execution logs
- Monitor alert generation patterns and volumes
- Validate data quality and completeness

#### Configuration Management
- Adjust fraud detection thresholds if needed
- Manage user roles and permissions
- Configure backup and recovery procedures

---

## Technical Documentation

### Database Schema

#### Reservation Table
```sql
Table: x_snc_reservatio_2_reservation
├── reservation_id (Integer) - Unique booking identifier
├── hotel_name (String, 100) - Hotel property name
├── room_type (String, 50) - Room category with choices
├── daily_price (Decimal) - Nightly rate amount
├── booking_date (Date) - Reservation booking date
├── customer_id (Integer) - Customer identifier
└── [Standard sys_ fields]
```

#### Fraud Alert Table
```sql
Table: x_snc_reservatio_2_fraud_alert
├── reservation (Reference) - Link to originating reservation
├── alert_status (Choice) - open, investigating, resolved, closed
├── severity (Choice) - critical, high, medium, low
├── explanation (String, 500) - Detailed alert description
├── recommended_action (String, 300) - Suggested next steps
├── detected_price_anomaly (Decimal) - Percentage deviation
├── comparable_prices (String, 200) - Reference pricing data
└── [Standard sys_ fields]
```

### Business Rule Logic

#### Fraud Detection Algorithm
```javascript
// Simplified algorithm overview
1. Extract reservation details (hotel, room_type, price, date)
2. Query comparable reservations (same hotel/room, past 30 days)
3. Calculate average price from comparable bookings
4. Compute price anomaly percentage: ((avg - current) / avg) * 100
5. If anomaly >= 40%:
   a. Determine severity level
   b. Generate contextual explanation
   c. Create recommended action
   d. Insert fraud alert record
```

#### Performance Considerations
- Business rule optimized for minimal database impact
- Indexed queries on hotel_name and room_type fields
- Configurable historical data window (default: 30 days)
- Minimum comparison threshold (default: 3 comparable reservations)

### Security Implementation

#### Access Control Lists (ACLs)
```javascript
// Fraud Alert Table Protection
- Read: x_snc_reservatio_2.fraud_monitoring_agent
- Write: x_snc_reservatio_2.fraud_monitoring_agent  
- Create: x_snc_reservatio_2.fraud_monitoring_agent
- Delete: x_snc_reservatio_2.fraud_monitoring_agent
```

#### Role Structure
```
x_snc_reservatio_2.fraud_monitoring_agent
├── Description: Fraud investigation and alert management
├── Contains: [No inherited roles]
└── Permissions: Full access to fraud alert workspace
```

---

## API Reference

### Table API Endpoints

#### Reservations
**Base URL**: `/api/now/table/x_snc_reservatio_2_reservation`

**GET** - Retrieve reservations
```javascript
// Get all reservations with display values
GET /api/now/table/x_snc_reservatio_2_reservation?sysparm_display_value=all

// Get specific reservation
GET /api/now/table/x_snc_reservatio_2_reservation/{sys_id}
```

**POST** - Create new reservation
```javascript
POST /api/now/table/x_snc_reservatio_2_reservation
{
  "reservation_id": "12345",
  "hotel_name": "Grand Plaza Hotel", 
  "room_type": "deluxe",
  "daily_price": "250.00",
  "booking_date": "2025-10-20",
  "customer_id": "67890"
}
```

#### Fraud Alerts
**Base URL**: `/api/now/table/x_snc_reservatio_2_fraud_alert`

**GET** - Retrieve fraud alerts
```javascript
// Get open alerts by severity
GET /api/now/table/x_snc_reservatio_2_fraud_alert?sysparm_query=alert_status=open^severity=critical

// Get alerts with related reservation data
GET /api/now/table/x_snc_reservatio_2_fraud_alert?sysparm_display_value=all
```

**PATCH** - Update alert status
```javascript
PATCH /api/now/table/x_snc_reservatio_2_fraud_alert/{sys_id}
{
  "alert_status": "investigating"
}
```

### Client-Side Integration

#### Authentication
All API calls require ServiceNow session authentication:
```javascript
headers: {
  "Accept": "application/json",
  "X-UserToken": window.g_ck  // ServiceNow session token
}
```

#### Error Handling
```javascript
try {
  const response = await fetch(url, options);
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Request failed');
  }
  return await response.json();
} catch (error) {
  console.error('API Error:', error);
  // Handle error appropriately
}
```

---

## Configuration

### Business Rule Configuration

#### Fraud Detection Thresholds
Current thresholds can be modified in the business rule script:
```javascript
// Configurable thresholds
const CRITICAL_THRESHOLD = 70;  // 70%+ below average
const HIGH_THRESHOLD = 55;      // 55-69% below average  
const MEDIUM_THRESHOLD = 40;    // 40-54% below average
const MIN_COMPARISONS = 3;      // Minimum comparable reservations
const LOOKBACK_DAYS = 30;       // Historical data window
```

#### Severity Messaging
Customize alert explanations and recommended actions:
```javascript
// Example severity configuration
if (priceAnomaly >= CRITICAL_THRESHOLD) {
  severity = 'critical';
  explanation = `Severe price anomaly detected: $${dailyPrice} is ${priceAnomaly.toFixed(1)}% below average`;
  recommendedAction = 'Immediate investigation required - Contact customer and verify booking details';
}
```

### UI Configuration

#### Dashboard Customization
Key configuration options in the React dashboard:
```javascript
// Dashboard refresh intervals
const STATS_REFRESH_INTERVAL = 30000;  // 30 seconds
const ALERTS_REFRESH_INTERVAL = 15000; // 15 seconds

// Display preferences  
const MAX_RECENT_ALERTS = 6;           // Cards shown on dashboard
const SEARCH_DEBOUNCE_MS = 300;        // Search input delay
const ANIMATION_DURATION = 300;        // UI transition speed
```

#### Color Scheme and Branding
CSS variables for easy theme customization:
```css
:root {
  --critical-color: #e74c3c;
  --high-color: #f39c12;
  --medium-color: #f1c40f;
  --low-color: #27ae60;
  --primary-color: #3498db;
  --secondary-color: #95a5a6;
}
```

### Performance Optimization

#### Database Optimization
- Ensure proper indexing on frequently queried fields
- Monitor business rule execution performance
- Consider data archival for historical reservations

#### Client-Side Optimization  
- Implement pagination for large alert lists
- Use debounced search to reduce API calls
- Cache frequently accessed data where appropriate

---

## Troubleshooting

### Common Issues

#### Business Rule Not Triggering
**Symptoms**: Fraud alerts not generated for suspicious reservations
**Causes**: 
- Business rule disabled or inactive
- Insufficient comparable reservation data (< 3 records)
- Date range issues (bookings outside 30-day window)

**Solutions**:
1. Verify business rule is active: Navigate to **System Definition > Business Rules**
2. Check data requirements: Ensure adequate historical reservation data
3. Review logs: Check **System Logs > System Log > All** for error messages
4. Test manually: Create test reservation with obvious price anomaly

#### Dashboard Not Loading
**Symptoms**: Blank or error page when accessing fraud dashboard
**Causes**:
- Missing React dependencies
- JavaScript errors in browser console  
- Incorrect role permissions
- ServiceNow instance issues

**Solutions**:
1. Check browser console for JavaScript errors
2. Verify user has `x_snc_reservatio_2.fraud_monitoring_agent` role
3. Confirm React dependencies installed: `npm install`
4. Test with different browser/clear cache

#### ACL Access Issues  
**Symptoms**: Users cannot access fraud alert records
**Causes**:
- Missing role assignment
- ACL configuration errors
- Elevated privilege requirements

**Solutions**:
1. Verify role assignment in **User Administration > Users**
2. Check ACL configuration in **System Security > Access Control (ACL)**
3. Test with admin user to isolate permission issues
4. Review security logs for access violations

#### Performance Issues
**Symptoms**: Slow dashboard loading or business rule execution
**Causes**:
- Large data volumes without proper indexing
- Inefficient queries in business rule
- Network connectivity issues

**Solutions**:
1. Add database indexes on hotel_name and room_type fields
2. Optimize business rule queries (limit date ranges)
3. Consider data archival strategies for old records
4. Monitor system performance metrics

### Diagnostic Tools

#### System Logs
Monitor the following log sources:
- **Application Logs**: Business rule execution and errors
- **Security Logs**: ACL violations and permission issues  
- **Performance Logs**: Query execution times and resource usage

#### Debug Mode
Enable debug logging for detailed troubleshooting:
```javascript
// Add to business rule for detailed logging
gs.debug('Fraud Detection Debug: Processing reservation ' + current.getValue('reservation_id'));
```

#### Browser Developer Tools
Use browser console to diagnose client-side issues:
- Check Network tab for failed API calls
- Review Console tab for JavaScript errors
- Analyze Performance tab for loading issues

---

## Development Guide

### Development Environment Setup

#### Prerequisites
- Node.js 16+ and npm
- ServiceNow SDK 4.0.2+
- VS Code with ServiceNow extension (recommended)
- Git for version control

#### Local Development
```bash
# Clone repository
git clone [repository-url]
cd reservation-fraud-detection

# Install dependencies  
npm install

# Build application
npm run build

# Deploy to instance
npm run deploy
```

#### File Structure
```
src/
├── client/                    # React frontend code
│   ├── app.jsx               # Main dashboard component
│   ├── app.css               # Styling and themes
│   ├── main.jsx              # React bootstrap
│   ├── index.html            # HTML entry point
│   └── utils/
│       └── fields.js         # ServiceNow field utilities
├── fluent/                   # ServiceNow metadata definitions
│   ├── index.now.ts          # Main exports
│   ├── tables/               # Table definitions
│   ├── business-rules/       # Business rule logic
│   ├── roles/                # Role definitions  
│   ├── acls/                 # Access control lists
│   ├── ui-pages/            # UI page definitions
│   └── sample-data/         # Test data records
├── server/                   # Server-side JavaScript
│   └── fraud-detection.js    # Core fraud detection logic
└── docs/                     # Documentation files
```

### Coding Standards

#### ServiceNow Fluent
- Use TypeScript for all .now.ts files
- Import required APIs from `@servicenow/sdk/core`
- Follow naming conventions with scope prefixes
- Include proper type definitions and error handling

#### React Development
- Use functional components with hooks
- Implement proper error boundaries
- Follow accessibility guidelines (WCAG 2.1)
- Use CSS modules or styled-components for styling

#### Server-Side JavaScript
- Import ServiceNow APIs from `@servicenow/glide`
- Use try-catch blocks for error handling
- Log meaningful debug information
- Follow ServiceNow JavaScript best practices

### Testing Strategy

#### Unit Testing
```javascript
// Example business rule test
describe('Fraud Detection Business Rule', () => {
  test('should detect critical price anomaly', () => {
    // Test logic for price anomaly detection
    const result = detectPriceAnomaly(32.50, 127.50);
    expect(result.severity).toBe('critical');
    expect(result.anomaly).toBeCloseTo(74.5);
  });
});
```

#### Integration Testing
- Test complete fraud detection workflow
- Verify business rule triggers correctly
- Validate API endpoints and data flow
- Test user interface functionality

#### User Acceptance Testing  
- Create realistic fraud scenarios
- Test with actual fraud monitoring agents
- Validate investigation workflows
- Verify reporting and documentation features

### Deployment Pipeline

#### Development Workflow
1. **Development**: Local development with ServiceNow SDK
2. **Testing**: Automated tests and manual validation
3. **Staging**: Deploy to staging instance for UAT
4. **Production**: Deploy to production with change management

#### Version Control
```bash
# Feature branch workflow
git checkout -b feature/enhanced-dashboard
git commit -m "Add advanced filtering to dashboard"
git push origin feature/enhanced-dashboard
# Create pull request for review
```

#### Release Management
- Semantic versioning (e.g., v1.2.3)
- Changelog documentation
- Rollback procedures
- Database migration scripts (if needed)

### Extension Points

#### Custom Fraud Detection Rules
Add custom detection logic by extending the business rule:
```javascript
// Example: Add customer history analysis
function checkCustomerHistory(customerId) {
  // Query customer's previous reservations
  // Analyze booking patterns
  // Return risk score
}
```

#### Additional Alert Types
Extend the system with new alert categories:
```javascript
// Example: Geographic anomaly detection
const locationRisk = analyzeLocationRisk(hotelLocation, customerLocation);
if (locationRisk > threshold) {
  createLocationAlert(reservation, locationRisk);
}
```

#### External Integration
Connect with external fraud detection services:
```javascript
// Example: Third-party fraud scoring API
const fraudScore = await callExternalAPI(reservationData);
if (fraudScore.risk === 'HIGH') {
  createExternalAlert(reservation, fraudScore);
}
```

### Maintenance and Monitoring

#### Regular Maintenance Tasks
- Review and update fraud detection thresholds
- Archive old reservation and alert data
- Monitor system performance metrics
- Update documentation and user training materials

#### Health Monitoring
- Set up automated alerts for business rule failures
- Monitor dashboard usage and performance
- Track fraud detection accuracy and false positive rates
- Review user feedback and enhancement requests

#### Backup and Recovery
- Regular backup of application metadata
- Document restoration procedures
- Test disaster recovery processes
- Maintain development environment sync

---

## Appendix

### Sample Data
The application includes comprehensive sample data for testing and demonstration:

#### Reservations
- 21+ sample reservations across multiple hotels
- Various room types and price points
- Historical and current booking dates
- Realistic pricing scenarios

#### Fraud Alerts  
- 8 sample fraud alerts with different severity levels
- Varied investigation statuses
- Comprehensive explanations and recommendations
- Realistic price anomaly percentages

### Support and Resources

#### Documentation Links
- [ServiceNow Developer Documentation](https://developer.servicenow.com/)
- [ServiceNow SDK Guide](https://docs.servicenow.com/bundle/tokyo-application-development/page/build/servicenow-sdk/concept/servicenow-sdk.html)
- [React Documentation](https://reactjs.org/docs/)
- [Fluent API Reference](https://docs.servicenow.com/bundle/tokyo-application-development/page/build/applications/concept/fluent-api.html)

#### Community Resources
- ServiceNow Developer Community Forums
- ServiceNow Tech Talk Sessions
- GitHub Repository (if applicable)
- Training Materials and Video Tutorials

### Glossary

**ACL (Access Control List)**: Security rules that control user access to ServiceNow objects
**Business Rule**: Server-side scripts that run automatically when database operations occur
**Fluent DSL**: ServiceNow's domain-specific language for defining application metadata
**Price Anomaly**: Deviation from expected pricing based on historical data analysis
**RBAC (Role-Based Access Control)**: Security model that restricts access based on user roles
**ServiceNow SDK**: Software development kit for building ServiceNow applications
**Sys ID**: Unique identifier for ServiceNow database records

---

*Documentation Version: 1.0*  
*Last Updated: October 15, 2025*  
*Application Version: 1.0.0*