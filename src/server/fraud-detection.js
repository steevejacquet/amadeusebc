import { gs } from '@servicenow/glide';
import { GlideRecord } from '@servicenow/glide';

export function detectFraudulentReservation(current, previous) {
  try {
    // Get current reservation details
    const hotelName = current.getValue('hotel_name');
    const roomType = current.getValue('room_type');
    const dailyPrice = parseFloat(current.getValue('daily_price')) || 0;
    const bookingDate = current.getValue('booking_date');
    
    if (dailyPrice <= 0) return;
    
    // Calculate date 30 days before this booking date
    const currentBookingDate = new Date(bookingDate);
    const thirtyDaysAgo = new Date(currentBookingDate);
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    const cutoffDate = thirtyDaysAgo.toISOString().split('T')[0]; // YYYY-MM-DD format
    
    // Query comparable reservations in the 30 days before this booking
    const gr = new GlideRecord('x_snc_reservatio_2_reservation');
    gr.addQuery('hotel_name', hotelName);
    gr.addQuery('room_type', roomType);
    gr.addQuery('booking_date', '>=', cutoffDate);
    gr.addQuery('booking_date', '<', bookingDate);  // Only look at bookings before this one
    gr.addQuery('sys_id', '!=', current.getUniqueValue());
    gr.query();
    
    const comparablePrices = [];
    let totalPrice = 0;
    let count = 0;
    
    while (gr.next()) {
      const price = parseFloat(gr.getValue('daily_price'));
      if (price > 0) {
        comparablePrices.push(price);
        totalPrice += price;
        count++;
      }
    }
    
    // Need at least 3 comparable reservations for fraud detection
    if (count < 3) return;
    
    const averagePrice = totalPrice / count;
    const priceAnomaly = ((averagePrice - dailyPrice) / averagePrice) * 100;
    
    // Flag as fraud if price is more than 40% below average
    if (priceAnomaly >= 40) {
      let severity = 'medium';
      let explanation = '';
      let recommendedAction = '';
      
      if (priceAnomaly >= 70) {
        severity = 'critical';
        explanation = `Severe price anomaly detected: $${dailyPrice} is ${priceAnomaly.toFixed(1)}% below average price of $${averagePrice.toFixed(2)} for ${roomType} rooms at ${hotelName}`;
        recommendedAction = 'Immediate investigation required - Contact customer and verify booking details';
      } else if (priceAnomaly >= 55) {
        severity = 'high';
        explanation = `High price anomaly detected: $${dailyPrice} is ${priceAnomaly.toFixed(1)}% below average price of $${averagePrice.toFixed(2)} for ${roomType} rooms at ${hotelName}`;
        recommendedAction = 'Priority investigation - Verify payment method and customer history';
      } else {
        severity = 'medium';
        explanation = `Price anomaly detected: $${dailyPrice} is ${priceAnomaly.toFixed(1)}% below average price of $${averagePrice.toFixed(2)} for ${roomType} rooms at ${hotelName}`;
        recommendedAction = 'Standard review - Check for promotional rates or booking errors';
      }
      
      const priceRangeStr = `Avg: $${averagePrice.toFixed(2)}, Range: $${Math.min(...comparablePrices).toFixed(2)} - $${Math.max(...comparablePrices).toFixed(2)}`;
      
      // Create fraud alert
      const alertGr = new GlideRecord('x_snc_reservatio_2_fraud_alert');
      alertGr.initialize();
      alertGr.setValue('reservation', current.getUniqueValue());
      alertGr.setValue('alert_status', 'open');
      alertGr.setValue('severity', severity);
      alertGr.setValue('explanation', explanation);
      alertGr.setValue('recommended_action', recommendedAction);
      alertGr.setValue('detected_price_anomaly', priceAnomaly.toFixed(1));
      alertGr.setValue('comparable_prices', priceRangeStr);
      alertGr.insert();
      
      gs.info(`Fraud alert created for reservation ${current.getValue('reservation_id')} - ${severity} severity`);
    }
    
  } catch (error) {
    gs.error(`Error in fraud detection: ${error.message}`);
  }
}