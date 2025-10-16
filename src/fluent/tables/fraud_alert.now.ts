import '@servicenow/sdk/global';
import { Table, StringColumn, ReferenceColumn, DecimalColumn } from '@servicenow/sdk/core';

export const x_snc_reservatio_2_fraud_alert = Table({
  name: 'x_snc_reservatio_2_fraud_alert',
  label: 'Fraud Alert',
  schema: {
    alert_status: StringColumn({ 
      label: 'Alert Status',
      mandatory: true,
      choices: {
        open: { label: 'Open', sequence: 0 },
        investigating: { label: 'Investigating', sequence: 1 },
        resolved: { label: 'Resolved', sequence: 2 },
        closed: { label: 'Closed', sequence: 3 }
      },
      default: 'open'
    }),
    severity: StringColumn({
      label: 'Severity',
      mandatory: true,
      choices: {
        low: { label: 'Low', sequence: 0 },
        medium: { label: 'Medium', sequence: 1 },
        high: { label: 'High', sequence: 2 },
        critical: { label: 'Critical', sequence: 3 }
      },
      default: 'medium'
    }),
    explanation: StringColumn({ 
      label: 'Explanation',
      maxLength: 500,
      mandatory: true
    }),
    recommended_action: StringColumn({ 
      label: 'Recommended Action',
      maxLength: 300,
      mandatory: true
    }),
    detected_price_anomaly: DecimalColumn({ 
      label: 'Detected Price Anomaly (%)',
      mandatory: true
    }),
    comparable_prices: StringColumn({ 
      label: 'Comparable Prices',
      maxLength: 200,
      mandatory: true
    }),
    reservation: ReferenceColumn({ 
      label: 'Linked Reservation',
      referenceTable: 'x_snc_reservatio_2_reservation',
      mandatory: true
    })
  },
  actions: ['create', 'read', 'update', 'delete'],
  allow_web_service_access: true,
  accessible_from: 'public'
});