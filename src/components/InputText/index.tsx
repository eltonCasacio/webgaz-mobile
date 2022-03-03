import React from 'react';
import {TextInputProps} from 'react-native';
import * as S from './styles';

type InputTextParams = {} & TextInputProps;

const InputText = ({...InputTextParams}) => {
  return <S.InputText />;
};

export default InputText;
