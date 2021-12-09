import React from 'react';
import {Text} from 'react-native-elements';
import * as S from './styles';

import Icon from 'react-native-vector-icons/FontAwesome';
import {Input} from 'react-native-elements';

const SignIn = () => {
  return (
    <S.Wrapper>
      <Text h1>Login</Text>
      <Input
        autoCompleteType={false}
        placeholder="INPUT WITH CUSTOM ICON"
        leftIcon={<Icon name="user" size={24} color="black" />}
      />
    </S.Wrapper>
  );
};

export default SignIn;
