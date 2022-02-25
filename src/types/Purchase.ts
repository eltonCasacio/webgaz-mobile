export type FuelType = 'GASOLINA' | 'ETANOL';
export type PaymentType = 'ANTECIPADO' | 'AVISTA' | '7DIAS' | '10DIAS';
export type DeliveryType = 'RETIRADA' | 'COLACADO';

export type Purchase = {
  order: number;
  date: Date;
  status: string;
  fuelType: 'GASOLINA' | 'ETANOL';
  paymentType: 'ANTECIPADO' | 'AVISTA' | '7DIAS' | '10DIAS';
  deliveryType: 'RETIRADA' | 'COLACADO';
  liters: number;
  totalPrice: number;
  driverName: string;
  shippingName: string;
  cnpj: string;
  cnh: string;
  plate: string;
};
