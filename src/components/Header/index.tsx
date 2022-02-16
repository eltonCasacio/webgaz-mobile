import React from 'react';
import * as S from './styles';
import UserIcon from 'react-native-vector-icons/AntDesign';
import NotificationIcon from 'react-native-vector-icons/Ionicons';

export type HeaderParams = {
  showMenu?: () => void;
  handleNotification?: () => void;
};

const Header = (params: HeaderParams) => {
  return (
    <S.Wrapper>
      <S.ImageUser onPress={params.showMenu}>
        <UserIcon name="user" size={20} color="#fcfcfc" />
      </S.ImageUser>
      <S.Location>Webgaz</S.Location>
      <S.Notification>
        <NotificationIcon
          name="notifications-outline"
          size={30}
          color="#fcfcfc"
        />
        <S.NotificationCircle />
      </S.Notification>
    </S.Wrapper>
  );
};

export default Header;
