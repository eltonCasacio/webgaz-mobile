import {UserProps} from '../types/User';
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function loadUserData(): Promise<UserProps> {
  try {
    const dataUser = await AsyncStorage.getItem('@webgaz:fullUser');
    if (!dataUser) throw new Error('User not found');
    return JSON.parse(dataUser);
  } catch (error) {
    console.error('Erro ao Carregar Preços', error);
  }
}
