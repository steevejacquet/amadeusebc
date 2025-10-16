import '@servicenow/sdk/global';
import { Table, StringColumn, IntegerColumn, DecimalColumn, DateColumn } from '@servicenow/sdk/core';

export const x_snc_reservatio_2_reservation = Table({
  name: 'x_snc_reservatio_2_reservation',
  label: 'Reservation',
  schema: {
    reservation_id: IntegerColumn({ 
      label: 'Reservation ID',
      mandatory: true
    }),
    hotel_name: StringColumn({ 
      label: 'Hotel Name',
      maxLength: 100,
      mandatory: true
    }),
    room_type: StringColumn({ 
      label: 'Room Type',
      maxLength: 50,
      mandatory: true,
      choices: {
        standard: { label: 'Standard', sequence: 0 },
        deluxe: { label: 'Deluxe', sequence: 1 },
        suite: { label: 'Suite', sequence: 2 },
        executive: { label: 'Executive', sequence: 3 },
        presidential: { label: 'Presidential', sequence: 4 }
      }
    }),
    daily_price: DecimalColumn({ 
      label: 'Daily Price',
      mandatory: true
    }),
    booking_date: DateColumn({ 
      label: 'Booking Date',
      mandatory: true
    }),
    customer_id: IntegerColumn({ 
      label: 'Customer ID',
      mandatory: true
    })
  },
  actions: ['create', 'read', 'update', 'delete'],
  allow_web_service_access: true,
  accessible_from: 'public'
});