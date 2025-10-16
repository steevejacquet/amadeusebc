import '@servicenow/sdk/global';
import { Record } from '@servicenow/sdk/core';

// Normal price reservations for establishing baseline
export const reservation1 = Record({
  $id: Now.ID['reservation-1'],
  table: 'x_snc_reservatio_2_reservation',
  data: {
    reservation_id: 1001,
    hotel_name: 'Grand Plaza Hotel',
    room_type: 'deluxe',
    daily_price: 250.00,
    booking_date: '2024-01-15',
    customer_id: 2001
  }
});

export const reservation2 = Record({
  $id: Now.ID['reservation-2'],
  table: 'x_snc_reservatio_2_reservation',
  data: {
    reservation_id: 1002,
    hotel_name: 'Grand Plaza Hotel',
    room_type: 'deluxe',
    daily_price: 275.00,
    booking_date: '2024-01-18',
    customer_id: 2002
  }
});

export const reservation3 = Record({
  $id: Now.ID['reservation-3'],
  table: 'x_snc_reservatio_2_reservation',
  data: {
    reservation_id: 1003,
    hotel_name: 'Grand Plaza Hotel',
    room_type: 'deluxe',
    daily_price: 260.00,
    booking_date: '2024-01-22',
    customer_id: 2003
  }
});

export const reservation4 = Record({
  $id: Now.ID['reservation-4'],
  table: 'x_snc_reservatio_2_reservation',
  data: {
    reservation_id: 1004,
    hotel_name: 'Grand Plaza Hotel',
    room_type: 'deluxe',
    daily_price: 280.00,
    booking_date: '2024-01-25',
    customer_id: 2004
  }
});

// This reservation should trigger a medium severity fraud alert (45% below average)
export const suspiciousReservation1 = Record({
  $id: Now.ID['suspicious-reservation-1'],
  table: 'x_snc_reservatio_2_reservation',
  data: {
    reservation_id: 1005,
    hotel_name: 'Grand Plaza Hotel',
    room_type: 'deluxe',
    daily_price: 145.00, // ~45% below average of ~266
    booking_date: '2024-01-28',
    customer_id: 2005
  }
});

// Standard room reservations for different baseline
export const reservation5 = Record({
  $id: Now.ID['reservation-5'],
  table: 'x_snc_reservatio_2_reservation',
  data: {
    reservation_id: 1006,
    hotel_name: 'Ocean View Resort',
    room_type: 'standard',
    daily_price: 120.00,
    booking_date: '2024-01-10',
    customer_id: 2006
  }
});

export const reservation6 = Record({
  $id: Now.ID['reservation-6'],
  table: 'x_snc_reservatio_2_reservation',
  data: {
    reservation_id: 1007,
    hotel_name: 'Ocean View Resort',
    room_type: 'standard',
    daily_price: 130.00,
    booking_date: '2024-01-14',
    customer_id: 2007
  }
});

export const reservation7 = Record({
  $id: Now.ID['reservation-7'],
  table: 'x_snc_reservatio_2_reservation',
  data: {
    reservation_id: 1008,
    hotel_name: 'Ocean View Resort',
    room_type: 'standard',
    daily_price: 125.00,
    booking_date: '2024-01-17',
    customer_id: 2008
  }
});

export const reservation8 = Record({
  $id: Now.ID['reservation-8'],
  table: 'x_snc_reservatio_2_reservation',
  data: {
    reservation_id: 1009,
    hotel_name: 'Ocean View Resort',
    room_type: 'standard',
    daily_price: 135.00,
    booking_date: '2024-01-20',
    customer_id: 2009
  }
});

// This should trigger a CRITICAL fraud alert (75% below average)
export const highlyFraudulentReservation = Record({
  $id: Now.ID['critical-fraud-reservation'],
  table: 'x_snc_reservatio_2_reservation',
  data: {
    reservation_id: 1010,
    hotel_name: 'Ocean View Resort',
    room_type: 'standard',
    daily_price: 32.50, // ~75% below average of ~127.50
    booking_date: '2024-01-29',
    customer_id: 2010
  }
});

// Suite reservations baseline
export const reservation9 = Record({
  $id: Now.ID['reservation-9'],
  table: 'x_snc_reservatio_2_reservation',
  data: {
    reservation_id: 1011,
    hotel_name: 'Luxury Towers',
    room_type: 'suite',
    daily_price: 450.00,
    booking_date: '2024-01-12',
    customer_id: 2011
  }
});

export const reservation10 = Record({
  $id: Now.ID['reservation-10'],
  table: 'x_snc_reservatio_2_reservation',
  data: {
    reservation_id: 1012,
    hotel_name: 'Luxury Towers',
    room_type: 'suite',
    daily_price: 480.00,
    booking_date: '2024-01-16',
    customer_id: 2012
  }
});

export const reservation11 = Record({
  $id: Now.ID['reservation-11'],
  table: 'x_snc_reservatio_2_reservation',
  data: {
    reservation_id: 1013,
    hotel_name: 'Luxury Towers',
    room_type: 'suite',
    daily_price: 465.00,
    booking_date: '2024-01-19',
    customer_id: 2013
  }
});

export const reservation12 = Record({
  $id: Now.ID['reservation-12'],
  table: 'x_snc_reservatio_2_reservation',
  data: {
    reservation_id: 1014,
    hotel_name: 'Luxury Towers',
    room_type: 'suite',
    daily_price: 470.00,
    booking_date: '2024-01-23',
    customer_id: 2014
  }
});

// This should trigger a HIGH severity fraud alert (60% below average)
export const highFraudReservation = Record({
  $id: Now.ID['high-fraud-reservation'],
  table: 'x_snc_reservatio_2_reservation',
  data: {
    reservation_id: 1015,
    hotel_name: 'Luxury Towers',
    room_type: 'suite',
    daily_price: 186.25, // ~60% below average of ~466.25
    booking_date: '2024-01-30',
    customer_id: 2015
  }
});