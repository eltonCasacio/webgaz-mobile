import {
  GetPurchase,
  FuelType,
  DeliveryType,
  PaymentType,
  PurchaseOrderStatus,
} from '../types/Purchase';
import {ShippingCompany} from '../types/ShippingCompany';
import {formatDate} from '../utils';
import API from './api';

export const loadPurchase = async (params: GetPurchase) => {
  const response = await API.post('order-price', params);
  return response.data;
};

type confirmPurchaseProps = {
  status: PurchaseOrderStatus;
  fuelStationId: number;
  fuelType: FuelType;
  paymentType: PaymentType;
  deliveryType: DeliveryType;
  totalPrice: number;
  qtdLiters: number;
  deliveryDate: string;
  shippingCompany: ShippingCompany;
};
export const confirmPurchase = async (params: confirmPurchaseProps) => {
  console.log("merda")
  params.deliveryDate = formatDate(params.deliveryDate);
  const response = await API.post('purchase-order', params);
  return response.status;
};

export const getPurchases = async (fuelStationId: number) => {
  const response = await API.get(`purchase-order/filter/${fuelStationId}`);
  return response;
};
