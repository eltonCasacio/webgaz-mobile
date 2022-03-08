import API from './api';
import {ResponseProps} from '../types/Home';

export async function loadPrices(
  fuelStationId: number,
): Promise<ResponseProps> {
  try {
    const result = await API.get(`home-price/${fuelStationId}`);
    if (result.status === 200) {
      const {data} = result;
      return data;
    }
    return undefined;
  } catch (error) {
    console.error('Erro ao Carregar Preços', error);
  }
}
