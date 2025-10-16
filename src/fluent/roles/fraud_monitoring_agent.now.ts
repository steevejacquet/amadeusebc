import '@servicenow/sdk/global';
import { Role } from '@servicenow/sdk/core';

//TODO: rename this role
export const fraud_monitoring_agent = Role({
  name: 'x_snc_reservatio_2.fraud_monitoring_agent',
  description: 'Role for agents who monitor and investigate fraud alerts in the reservation system'
});