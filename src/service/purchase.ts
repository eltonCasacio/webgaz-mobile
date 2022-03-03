import {GetPurchase, confirmPurchaseProps} from '../types/Purchase';
import {formatDate} from '../utils';
import API from './api';

export const loadPurchase = async (params: GetPurchase) => {
  const response = await API.post('order-price', params);
  return response.data;
};

export const confirmPurchase = async (params: confirmPurchaseProps) => {
  params.deliveryDate = formatDate(params.deliveryDate);
  const response = await API.post('purchase-order', params);
  return response.status;
};

export const getPurchases = async (fuelStationId: number) => {
  const response = await API.get(`purchase-order/filter/${fuelStationId}`);
  return response;
};
