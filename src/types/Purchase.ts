export type FuelType = 'GASOLINA' | 'ETANOL';
export type PaymentType = 'ANTECIPADO' | 'AVISTA' | '7DIAS' | '10DIAS';
export type DeliveryType = 'RETIRADA' | 'COLACADO';
export type PurchaseOrderStatus = 'PENDENTE' | 'ENTREGUE' | 'CANCELADO';

export type Purchase = {
  status: PurchaseOrderStatus;
  fuelStationId: number;
  fuelType: FuelType;
  paymentType: PaymentType;
  deliveryType: DeliveryType;
  totalPrice: number;
  qtdLiters: number;
  deliveryDate: string;
};

export type GetPurchase = {
  fuelType: FuelType;
  paymentType: PaymentType;
  deliveryType: DeliveryType;
  fuelStationId: number;
};
