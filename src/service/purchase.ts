import {GetPurchase, confirmPurchaseProps} from '../types/Purchase';
import {formatDate} from '../utils';
import API from './api';

export const loadPurchase = async (params: GetPurchase) => {
  const response = await API.post('order-price', params);
  return response.data;
};

export const confirmPurchase = async (params: confirmPurchaseProps) => {
  params.deliveryDate = formatDate(params.deliveryDate);
  try {
    const response = await API.post('purchase-order', params);
    console.debug('CONFIRME SUCESS', response);
    return response.status;
  } catch (error) {
    console.error('CONFIRME ERROR', error.response.data);
    return error.response.data;
  }
};

export const getPurchases = async (fuelStationId: number) => {
  const response = await API.get(`purchase-order/filter/${fuelStationId}`);
  return response;
};
