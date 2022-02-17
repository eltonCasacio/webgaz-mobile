import React from 'react';
import {useLinkTo} from '@react-navigation/native';
import {useAuth} from '../../contexts/auth';

import * as S from './styles';

const Menus = ['Perfil', 'Inicio', 'Pedidos'];

export default function Footer() {
  const {signOut} = useAuth();
  const linkTo = useLinkTo();

  const createMenu = (menu: string) => (
    <S.Menu key={menu} onPress={() => linkTo(`/${menu}`)}>
      <S.MenuTextView>
        <S.MenuText>{menu}</S.MenuText>
      </S.MenuTextView>
    </S.Menu>
  );

  return (
    <S.Wrapper>
      <S.Scroll horizontal>
        {/* {Menus.map(menu => createMenu(menu))} */}

        <S.Menu onPress={() => linkTo(`/Perfil`)}>
          <S.MenuTextView>
            <S.MenuText>Perfil</S.MenuText>
          </S.MenuTextView>
        </S.Menu>

        <S.Menu onPress={() => linkTo(`/Inicio`)}>
          <S.MenuTextView>
            <S.MenuText>Inicio</S.MenuText>
          </S.MenuTextView>
        </S.Menu>

        <S.Menu onPress={() => linkTo(`/Pedidos`)}>
          <S.MenuTextView>
            <S.MenuText>Pedidos</S.MenuText>
          </S.MenuTextView>
        </S.Menu>

        <S.Menu onPress={signOut}>
          <S.MenuTextView>
            <S.MenuText>SAIR</S.MenuText>
          </S.MenuTextView>
        </S.Menu>
      </S.Scroll>
    </S.Wrapper>
  );
}
