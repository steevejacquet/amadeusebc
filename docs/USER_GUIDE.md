# Fraud Monitoring Agent User Guide

## Welcome to the Reservation Fraud Detection System

This guide provides comprehensive instructions for fraud monitoring agents to effectively use the fraud detection system for investigating suspicious hotel reservations.

---

## Table of Contents
1. [Getting Started](#getting-started)
2. [Dashboard Overview](#dashboard-overview)  
3. [Alert Investigation Process](#alert-investigation-process)
4. [Alert Management](#alert-management)
5. [Search and Filtering](#search-and-filtering)
6. [Best Practices](#best-practices)
7. [Escalation Procedures](#escalation-procedures)

---

## Getting Started

### Accessing the System
**Dashboard URL**: https://steeve.amadeussbx.devsandboxes.service-now.com/x_snc_reservatio_2_fraud_dashboard.do

### Prerequisites
- ServiceNow account with `fraud_monitoring_agent` role
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Basic understanding of hotel reservation processes

### First Time Login
1. Access the dashboard URL
2. Log in with your ServiceNow credentials
3. Verify you can see the fraud detection dashboard
4. If access denied, contact your system administrator

---

## Dashboard Overview

### Main Dashboard Components

#### 1. Statistics Cards
The top section displays real-time fraud statistics:

**📊 Total Open Alerts**
- Shows all unresolved fraud cases
- Click "View All →" to see complete list
- Updates automatically every 30 seconds

**🚨 Critical Alerts** 
- Immediate attention required
- Price 70%+ below market average
- Click "Investigate →" for priority review

**⚠️ High Priority**
- Priority investigation needed
- Price 55-69% below average  
- Click "Review →" for detailed analysis

**⚡ Medium Priority**
- Standard review required
- Price 40-54% below average
- Click "Monitor →" for routine check

#### 2. Recent Alerts Section
- Displays 6 most recent fraud alerts
- Color-coded by severity level
- Click any alert card for detailed view
- Shows key information at a glance:
  - Severity level with icon
  - Creation timestamp
  - Price anomaly percentage
  - Current investigation status

### Color Coding System
- 🔴 **Red**: Critical severity alerts
- 🟠 **Orange**: High priority alerts  
- 🟡 **Yellow**: Medium priority alerts
- 🟢 **Green**: Low priority alerts

---

## Alert Investigation Process

### Step 1: Alert Triage

#### Accessing Alert Details
1. **From Dashboard**: Click any alert card
2. **From Alert List**: Click "View" button in Actions column
3. **Detail Modal Opens**: Shows comprehensive alert information

#### Alert Information Review
The detail modal contains:
- **Severity Level**: Critical/High/Medium/Low with visual indicators
- **Current Status**: Open/Investigating/Resolved/Closed
- **Price Anomaly**: Percentage below market average
- **Explanation**: Detailed description of detected anomaly
- **Recommended Action**: Suggested next steps based on severity
- **Comparable Prices**: Market rate context and price range

### Step 2: Investigation Actions by Severity

#### 🚨 Critical Alerts (70%+ below average)
**Immediate Actions Required:**
1. **Contact Customer Immediately**
   - Verify booking details directly with customer
   - Confirm payment method and authorization
   - Check customer identification documents
   
2. **Reservation Verification**
   - Cross-reference with hotel booking system
   - Verify room availability and pricing
   - Check for system errors or data corruption
   
3. **Fraud Indicators Assessment**
   - Multiple bookings from same customer
   - Unusual booking patterns or timing
   - Payment method red flags
   - Geographic inconsistencies

#### ⚠️ High Priority Alerts (55-69% below average)
**Priority Investigation Steps:**
1. **Payment Method Verification**
   - Check credit card validity and ownership
   - Review payment processing logs
   - Verify billing address information
   
2. **Customer History Analysis**
   - Review previous booking patterns
   - Check for chargebacks or disputes
   - Analyze customer account status
   
3. **Rate Verification**
   - Confirm no legitimate promotional rates apply
   - Check for corporate or group discounts
   - Verify booking channel and terms

#### ⚡ Medium Priority Alerts (40-54% below average)
**Standard Review Process:**
1. **Promotional Rate Check**
   - Verify if legitimate promotions apply
   - Check seasonal or event-based pricing
   - Confirm booking channel discounts
   
2. **Data Validation**
   - Review for booking system errors
   - Check price calculation accuracy
   - Verify room type and date accuracy
   
3. **Pattern Monitoring**
   - Document findings for trend analysis
   - Monitor for escalation indicators
   - Schedule follow-up if needed

### Step 3: Documentation and Status Updates

#### Status Management
Use the alert detail modal to update investigation status:

1. **Mark as Investigating**
   - Click when beginning active investigation
   - Add investigation notes in comments
   - Set expected completion timeframe

2. **Mark as Resolved**
   - Use when investigation complete, no fraud found
   - Document resolution details
   - Include findings and corrective actions

3. **Mark as Closed**
   - Use for confirmed fraud cases
   - Document fraud confirmation details
   - Initiate appropriate remediation actions

#### Documentation Requirements
For each investigation, document:
- **Investigation methods used**
- **Customer contact details and responses**
- **Verification steps completed**
- **Final determination and reasoning**
- **Follow-up actions required**

---

## Alert Management

### Bulk Operations

#### Filtering Multiple Alerts
1. **Access Alert List**: Click any "View All" button from dashboard
2. **Apply Filters**: Use severity and status filters
3. **Select Alerts**: Use checkboxes for bulk selection
4. **Bulk Actions**: Update status for multiple alerts simultaneously

#### Export Functionality
1. **Filter desired alerts** using search and filter controls
2. **Select export format** (Excel, CSV, PDF)
3. **Include investigation notes** for comprehensive reporting
4. **Generate report** for management or compliance purposes

### Priority Queue Management

#### Daily Workflow
1. **Start with Critical Alerts**: Address all critical alerts first
2. **Process High Priority**: Work through high priority queue
3. **Review Medium Alerts**: Process during available time
4. **Monitor Low Alerts**: Check for pattern development

#### Time Management
- **Critical**: Investigate within 1 hour
- **High**: Complete within 4 hours  
- **Medium**: Address within 24 hours
- **Low**: Review weekly or as time permits

---

## Search and Filtering

### Advanced Search Features

#### Text Search
- **Global Search**: Search across all alert fields
- **Search Terms**: Hotel names, explanations, recommendations
- **Real-time Results**: Updates as you type
- **Case Insensitive**: Works regardless of capitalization

#### Filter Options
**By Severity:**
- All Severities (default)
- Critical Only
- High Only  
- Medium Only
- Low Only

**By Status:**
- Open (new alerts)
- Investigating (active cases)
- Resolved (completed, no fraud)
- Closed (confirmed fraud or archived)

**By Date Range:**
- Today's alerts
- Last 7 days
- Last 30 days
- Custom date range

### Sorting Options
- **Creation Date**: Newest first (default) or oldest first
- **Severity Level**: Highest priority first
- **Price Anomaly**: Largest deviation first
- **Hotel Name**: Alphabetical order

---

## Best Practices

### Investigation Efficiency

#### Time Management
1. **Triage Quickly**: Spend 2-3 minutes on initial assessment
2. **Prioritize Critical**: Always handle critical alerts first
3. **Batch Similar Cases**: Group similar hotels/patterns
4. **Document Concisely**: Efficient but thorough documentation

#### Quality Standards
1. **Verify All Claims**: Don't assume - always verify
2. **Multiple Data Points**: Use multiple verification methods
3. **Customer Contact**: Direct customer contact when in doubt
4. **Paper Trail**: Document all investigation steps

### Fraud Detection Accuracy

#### Minimizing False Positives
- **Check Seasonal Rates**: Consider off-season pricing
- **Verify Promotions**: Confirm legitimate promotional offers
- **System Issues**: Rule out technical problems first
- **Context Matters**: Consider special events or circumstances

#### Identifying True Fraud
- **Pattern Recognition**: Look for repeated suspicious behavior
- **Cross-Reference Data**: Verify multiple data points
- **External Validation**: Use third-party verification when available
- **Trust Instincts**: Investigate when something feels wrong

### Communication Guidelines

#### Customer Interaction
1. **Professional Tone**: Always maintain courteous communication
2. **Clear Questions**: Ask specific, easy-to-understand questions
3. **Document Responses**: Record all customer communications
4. **Follow-up**: Ensure resolution and customer satisfaction

#### Internal Communication
1. **Escalation**: Know when and how to escalate complex cases
2. **Team Updates**: Share relevant patterns or findings
3. **Management Reporting**: Provide regular status updates
4. **Knowledge Sharing**: Contribute to team knowledge base

---

## Escalation Procedures

### When to Escalate

#### Immediate Escalation (Critical)
- **Confirmed Large-Scale Fraud**: Multiple related fraudulent bookings
- **Security Breach Suspected**: Systematic compromise indicators
- **Legal Issues**: Potential criminal activity or law enforcement involvement
- **System Compromise**: Technical security concerns

#### Standard Escalation (High/Medium)
- **Complex Investigations**: Cases requiring specialized expertise
- **Customer Disputes**: Unresolved customer satisfaction issues
- **Policy Questions**: Uncertain procedural or policy matters
- **Technical Issues**: System problems affecting investigations

### Escalation Contacts

#### Internal Escalation
1. **Fraud Investigation Supervisor**
   - Complex case guidance
   - Policy interpretation
   - Resource allocation

2. **Security Team**
   - Technical security concerns
   - System compromise issues
   - Advanced threat analysis

3. **Legal Department**
   - Potential criminal activity
   - Regulatory compliance issues
   - Legal action requirements

#### External Escalation
1. **Law Enforcement**
   - Confirmed criminal fraud
   - Identity theft cases
   - Large-scale fraud operations

2. **Payment Processors**
   - Credit card fraud confirmation
   - Chargeback disputes
   - Payment system issues

### Escalation Documentation
For all escalations, document:
- **Reason for escalation**
- **Investigation steps completed**
- **Evidence collected**
- **Escalation contact and response**
- **Resolution outcome**

---

## Performance Metrics

### Individual Performance Indicators
- **Case Resolution Time**: Average time to close cases
- **Accuracy Rate**: Percentage of correct fraud determinations
- **Customer Satisfaction**: Feedback scores from customer interactions
- **Case Volume**: Number of cases handled per day/week

### Team Performance Metrics
- **False Positive Rate**: Alerts resolved as non-fraudulent
- **Fraud Detection Rate**: Confirmed fraud cases identified
- **Response Time**: Average time from alert to investigation start
- **Recovery Rate**: Amount of fraud losses prevented

---

## Training and Development

### Continuous Learning
1. **Stay Updated**: Review new fraud patterns and techniques
2. **Share Knowledge**: Participate in team knowledge sharing sessions
3. **Skill Development**: Pursue fraud investigation certifications
4. **Technology Training**: Stay current with system updates and features

### Resources
- **Internal Knowledge Base**: Company fraud investigation procedures
- **Industry Publications**: Fraud prevention industry resources
- **Training Courses**: Professional development opportunities
- **Peer Networks**: Industry fraud investigation communities

---

## FAQ

### Common Questions

**Q: How often should I check the dashboard?**
A: Check the dashboard at least every 30 minutes during active hours. Critical alerts require immediate attention.

**Q: What if I can't reach a customer for verification?**
A: Try multiple contact methods (phone, email). If no response within 2 hours for critical alerts, escalate to supervisor.

**Q: How do I handle language barriers with customers?**
A: Use translation services or escalate to team members with appropriate language skills.

**Q: What if I disagree with the system's severity assessment?**
A: Document your reasoning and escalate to supervisor for review. The system can be adjusted based on expert feedback.

**Q: How long should I spend on each investigation?**
A: Critical: 30-60 minutes, High: 15-30 minutes, Medium: 10-15 minutes, Low: 5-10 minutes initially.

### Technical Issues

**Q: The dashboard won't load. What should I do?**
A: Try refreshing the page, clearing browser cache, or using a different browser. Contact IT support if issues persist.

**Q: I can't update an alert status. Why?**
A: Verify you have the fraud_monitoring_agent role. Check with system administrator if problems continue.

**Q: Search function isn't working properly.**
A: Try using different search terms or filters. Report persistent issues to the technical support team.

---

## Contact Information

### Support Contacts
- **Technical Issues**: ServiceNow Admin Team (ext. 1234)
- **Process Questions**: Fraud Investigation Manager (ext. 5678)
- **Training Requests**: Application Development Team (ext. 9012)
- **Emergency Escalation**: Security Operations Center (ext. 0000)

### System Information
- **Application Version**: 1.0.0
- **Last Updated**: October 15, 2025
- **Support Hours**: Monday-Friday, 8 AM - 6 PM EST
- **Emergency Support**: 24/7 for critical security issues

---

*This guide is updated regularly. Check for the latest version quarterly.*

**Document Version: 1.0**  
**Effective Date: October 15, 2025**  
**Next Review Date: January 15, 2026**