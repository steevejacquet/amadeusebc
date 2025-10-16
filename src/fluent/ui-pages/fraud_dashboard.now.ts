import '@servicenow/sdk/global';
import { UiPage } from '@servicenow/sdk/core';
import dashboardPage from '../../client/index.html';

export const fraud_dashboard = UiPage({
  $id: Now.ID['fraud-dashboard'],
  endpoint: 'x_snc_reservatio_2_fraud_dashboard.do',
  html: dashboardPage,
  direct: true
});