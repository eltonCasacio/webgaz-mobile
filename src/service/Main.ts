import API from '../service/api';
import {responseMessage} from '../utils';

export type PurchaseOrderProps = {};

type ResponseProps = {
  msg: string;
  severity: string;
};

export async function purchaseOrder(): Promise<ResponseProps> {
  try {
    await API.post('signup');
    return responseMessage('Pedido em analise', 'success');
  } catch (error) {
    return responseMessage('Erro ao realizar pedido', 'error');
  }
}
