import '@servicenow/sdk/global';
import { Record } from '@servicenow/sdk/core';

// Additional test reservation to trigger the business rule 
export const triggerTestReservation = Record({
  $id: Now.ID['trigger-test-reservation'],
  table: 'x_snc_reservatio_2_reservation',
  data: {
    reservation_id: 2001,
    hotel_name: 'Grand Plaza Hotel',
    room_type: 'deluxe',
    daily_price: 120.00, // This should trigger a fraud alert
    booking_date: '2024-02-01', // After the baseline data
    customer_id: 3001
  }
});