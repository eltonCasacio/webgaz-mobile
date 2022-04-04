import {GetPurchase, ConfirmPurchaseProps} from '../types/Purchase';
import {formatDate} from '../utils';
import API from './api';

export const loadPurchase = async (params: GetPurchase) => {
  const response = await API.post('order-price', params);
  return response.data;
};

export const confirmPurchase = async (params: ConfirmPurchaseProps) => {
  params.deliveryDate = formatDate(params.deliveryDate);
  try {
    console.log('paramtros:::::', params)
    const response = await API.post('purchase-order', params);
    if (response.status === 201)
    return response.status;
  } catch (error) {
    console.error('ERRO AO CONFIRMAR PEDIDO', error.response.data);
    return error.response.data;
  }
};

export const getPurchases = async (fuelStationId: number) => {
  const response = await API.get(`purchase-order/filter/${fuelStationId}`);
  return response;
};
