import API from '../service/api';
import {responseMessage} from '../utils';

export type Props = {
  type: string
  shippingType: string;
  liters: number;
  total: number;
};

type ResponseProps = {
  msg: string;
  severity: string;
};

export async function purchaseOrder(params: Props): Promise<ResponseProps> {
  console.log(params);
  try {
    // await API.post('purchaseOrder');
    return responseMessage('Pedido em analise', 'success');
  } catch (error) {
    return responseMessage('Erro ao realizar pedido', 'error');
  }
}
