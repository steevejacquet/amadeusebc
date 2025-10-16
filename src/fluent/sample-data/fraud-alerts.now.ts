import '@servicenow/sdk/global';
import { Record } from '@servicenow/sdk/core';

// Critical severity fraud alert
export const fraudAlert1 = Record({
  $id: Now.ID['fraud-alert-1'],
  table: 'x_snc_reservatio_2_fraud_alert',
  data: {
    reservation: 'dbbbdd5ab707499da5c375e4d297eddf', // Ocean View Resort reservation with $32.50
    alert_status: 'open',
    severity: 'critical',
    explanation: 'Severe price anomaly detected: $32.50 is 74.5% below average price of $127.50 for standard rooms at Ocean View Resort',
    recommended_action: 'Immediate investigation required - Contact customer and verify booking details',
    detected_price_anomaly: 74.5,
    comparable_prices: 'Avg: $127.50, Range: $120.00 - $135.00'
  }
});

// High severity fraud alert
export const fraudAlert2 = Record({
  $id: Now.ID['fraud-alert-2'],
  table: 'x_snc_reservatio_2_fraud_alert',
  data: {
    reservation: 'aa883f8454bd47a78c6462042692266b', // Grand Plaza Hotel reservation with $145
    alert_status: 'open',
    severity: 'high',
    explanation: 'High price anomaly detected: $145.00 is 56.2% below average price of $266.25 for deluxe rooms at Grand Plaza Hotel',
    recommended_action: 'Priority investigation - Verify payment method and customer history',
    detected_price_anomaly: 56.2,
    comparable_prices: 'Avg: $266.25, Range: $250.00 - $280.00'
  }
});

// Medium severity fraud alert
export const fraudAlert3 = Record({
  $id: Now.ID['fraud-alert-3'],
  table: 'x_snc_reservatio_2_fraud_alert',
  data: {
    reservation: 'b223ed0bae6d4b6ea91fcf1f2fccdc02', // Test reservation with $120
    alert_status: 'investigating',
    severity: 'medium',
    explanation: 'Price anomaly detected: $120.00 is 45.0% below average price of $218.18 for deluxe rooms at Grand Plaza Hotel',
    recommended_action: 'Standard review - Check for promotional rates or booking errors',
    detected_price_anomaly: 45.0,
    comparable_prices: 'Avg: $218.18, Range: $145.00 - $280.00'
  }
});

// Another critical alert - different hotel
export const fraudAlert4 = Record({
  $id: Now.ID['fraud-alert-4'],
  table: 'x_snc_reservatio_2_fraud_alert',
  data: {
    reservation: 'a1f6e99e07c34e739106029ab9f3eaed', // Luxury Towers suite with $186.25
    alert_status: 'open',
    severity: 'critical',
    explanation: 'Severe price anomaly detected: $186.25 is 72.3% below average price of $672.50 for suite rooms at Luxury Towers',
    recommended_action: 'Immediate investigation required - Potential credit card fraud detected',
    detected_price_anomaly: 72.3,
    comparable_prices: 'Avg: $672.50, Range: $450.00 - $480.00'
  }
});

// High severity - resolved
export const fraudAlert5 = Record({
  $id: Now.ID['fraud-alert-5'],
  table: 'x_snc_reservatio_2_fraud_alert',
  data: {
    reservation: '1f4d076f59a445f5bcacbae1f5c5dfb6', // Luxury Towers suite normal price
    alert_status: 'resolved',
    severity: 'high',
    explanation: 'High price anomaly detected: $450.00 is 55.1% below average price of $1002.00 for suite rooms at Luxury Towers',
    recommended_action: 'Investigation completed - Confirmed promotional rate',
    detected_price_anomaly: 55.1,
    comparable_prices: 'Avg: $1002.00, Range: $800.00 - $1200.00'
  }
});

// Medium severity - investigating
export const fraudAlert6 = Record({
  $id: Now.ID['fraud-alert-6'],
  table: 'x_snc_reservatio_2_fraud_alert',
  data: {
    reservation: 'bcebc3288c094e72b63cf06767930cb2', // Ocean View standard room
    alert_status: 'investigating',
    severity: 'medium',
    explanation: 'Price anomaly detected: $120.00 is 42.9% below average price of $210.00 for standard rooms at Ocean View Resort',
    recommended_action: 'Review in progress - Checking customer booking history',
    detected_price_anomaly: 42.9,
    comparable_prices: 'Avg: $210.00, Range: $180.00 - $250.00'
  }
});

// Low severity alert
export const fraudAlert7 = Record({
  $id: Now.ID['fraud-alert-7'],
  table: 'x_snc_reservatio_2_fraud_alert',
  data: {
    reservation: 'c606ada772284b919b19b07f930f7eb4', // Ocean View standard room
    alert_status: 'open',
    severity: 'low',
    explanation: 'Minor price anomaly detected: $130.00 is 35.0% below average price of $200.00 for standard rooms at Ocean View Resort',
    recommended_action: 'Monitor - Likely within acceptable range for off-season rates',
    detected_price_anomaly: 35.0,
    comparable_prices: 'Avg: $200.00, Range: $175.00 - $225.00'
  }
});

// Another critical - recent
export const fraudAlert8 = Record({
  $id: Now.ID['fraud-alert-8'],
  table: 'x_snc_reservatio_2_fraud_alert',
  data: {
    reservation: '56b48545018d4d0b8bb3fa14eb54a305', // Ocean View standard
    alert_status: 'open',
    severity: 'critical',
    explanation: 'Severe price anomaly detected: $125.00 is 76.8% below average price of $538.89 for standard rooms at Ocean View Resort',
    recommended_action: 'Immediate investigation required - Suspicious booking pattern detected',
    detected_price_anomaly: 76.8,
    comparable_prices: 'Avg: $538.89, Range: $450.00 - $650.00'
  }
});