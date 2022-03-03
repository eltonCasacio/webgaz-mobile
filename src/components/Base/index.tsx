import React from 'react';
import * as S from './styles';
import {Header, Footer} from '../';
import {useAuth} from '../../contexts/auth';

export type BaseProps = {
  children: React.ReactNode;
};

const Base: React.FC<BaseProps> = props => {
  const {user, signed} = useAuth();
  return (
    <S.Wrapper>
      {!!signed && <Header />}
      {props.children}
      {user?.status === 'ACTIVE' && <Footer />}
    </S.Wrapper>
  );
};

export default Base;
