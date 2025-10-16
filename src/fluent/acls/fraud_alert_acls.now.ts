import '@servicenow/sdk/global';
import { Acl } from '@servicenow/sdk/core';
import { fraud_monitoring_agent } from '../roles/fraud_monitoring_agent.now.ts';

// Read access to fraud alerts for fraud monitoring agents only
export const fraud_alert_read_acl = Acl({
  $id: Now.ID['fraud_alert_read'],
  active: true,
  type: 'record',
  table: 'x_snc_reservatio_2_fraud_alert',
  operation: 'read',
  roles: [fraud_monitoring_agent],
  description: 'Only fraud monitoring agents can read fraud alerts'
});

// Write access to fraud alerts for fraud monitoring agents only
export const fraud_alert_write_acl = Acl({
  $id: Now.ID['fraud_alert_write'],
  active: true,
  type: 'record',
  table: 'x_snc_reservatio_2_fraud_alert',
  operation: 'write',
  roles: [fraud_monitoring_agent],
  description: 'Only fraud monitoring agents can update fraud alerts'
});

// Create access to fraud alerts for fraud monitoring agents only
export const fraud_alert_create_acl = Acl({
  $id: Now.ID['fraud_alert_create'],
  active: true,
  type: 'record',
  table: 'x_snc_reservatio_2_fraud_alert',
  operation: 'create',
  roles: [fraud_monitoring_agent],
  description: 'Only fraud monitoring agents can create fraud alerts'
});

// Delete access to fraud alerts for fraud monitoring agents only
export const fraud_alert_delete_acl = Acl({
  $id: Now.ID['fraud_alert_delete'],
  active: true,
  type: 'record',
  table: 'x_snc_reservatio_2_fraud_alert',
  operation: 'delete',
  roles: [fraud_monitoring_agent],
  description: 'Only fraud monitoring agents can delete fraud alerts'
});