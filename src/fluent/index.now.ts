// Fraud Detection Application - Main exports
import '@servicenow/sdk/global';

// Tables
export * from './tables/reservation.now.ts';
export * from './tables/fraud_alert.now.ts';

// Roles
export * from './roles/fraud_monitoring_agent.now.ts';

// ACLs
export * from './acls/fraud_alert_acls.now.ts';

// Business Rules
export * from './business-rules/fraud-detection.now.ts';

// UI Pages
export * from './ui-pages/fraud_dashboard.now.ts';

// Sample Data
export * from './sample-data/reservations.now.ts';
export * from './sample-data/fraud-alerts.now.ts';
export * from './sample-data/current-reservations.now.ts';