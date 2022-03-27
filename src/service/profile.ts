import API from './api';
import {UserMocks} from '../mocks/User';

export async function loadUserData(
  fuelStationId: number,
): Promise<typeof UserMocks> {
  try {
    // const result = await API.get(`client/${fuelStationId}`);
    // if (result.status === 200) {
    //   const {data} = result;
    //   return data;
    // }
    return UserMocks;
  } catch (error) {
    console.error('Erro ao Carregar Preços', error);
  }
}
