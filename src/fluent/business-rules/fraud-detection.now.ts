import '@servicenow/sdk/global';
import { BusinessRule } from '@servicenow/sdk/core';
import { detectFraudulentReservation } from '../../server/fraud-detection.js';

export const reservation_fraud_detection = BusinessRule({
  $id: Now.ID['fraud_detection_br'],
  name: 'Reservation Fraud Detection',
  table: 'x_snc_reservatio_2_reservation',
  when: 'after',
  action: ['insert', 'update'],
  script: detectFraudulentReservation,
  order: 100,
  active: true,
  description: 'Detects fraudulent reservations based on price anomalies compared to similar bookings'
});