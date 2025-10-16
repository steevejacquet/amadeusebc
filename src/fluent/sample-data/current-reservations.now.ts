import '@servicenow/sdk/global';
import { Record } from '@servicenow/sdk/core';

// Current month reservations to show active monitoring
export const currentReservation1 = Record({
  $id: Now.ID['current-reservation-1'],
  table: 'x_snc_reservatio_2_reservation',
  data: {
    reservation_id: 3001,
    hotel_name: 'Downtown Business Hotel',
    room_type: 'executive',
    daily_price: 320.00,
    booking_date: '2025-10-14', // Recent date
    customer_id: 4001
  }
});

export const currentReservation2 = Record({
  $id: Now.ID['current-reservation-2'],
  table: 'x_snc_reservatio_2_reservation',
  data: {
    reservation_id: 3002,
    hotel_name: 'Downtown Business Hotel',
    room_type: 'executive',
    daily_price: 340.00,
    booking_date: '2025-10-13',
    customer_id: 4002
  }
});

export const currentReservation3 = Record({
  $id: Now.ID['current-reservation-3'],
  table: 'x_snc_reservatio_2_reservation',
  data: {
    reservation_id: 3003,
    hotel_name: 'Downtown Business Hotel',
    room_type: 'executive',
    daily_price: 330.00,
    booking_date: '2025-10-12',
    customer_id: 4003
  }
});

export const currentReservation4 = Record({
  $id: Now.ID['current-reservation-4'],
  table: 'x_snc_reservatio_2_reservation',
  data: {
    reservation_id: 3004,
    hotel_name: 'Downtown Business Hotel',
    room_type: 'executive',
    daily_price: 335.00,
    booking_date: '2025-10-11',
    customer_id: 4004
  }
});

// This suspicious reservation should trigger a new fraud alert
export const suspiciousCurrentReservation = Record({
  $id: Now.ID['suspicious-current-reservation'],
  table: 'x_snc_reservatio_2_reservation',
  data: {
    reservation_id: 3005,
    hotel_name: 'Downtown Business Hotel',
    room_type: 'executive',
    daily_price: 89.00, // ~73% below average of ~331.25
    booking_date: '2025-10-15', // Today
    customer_id: 4005
  }
});