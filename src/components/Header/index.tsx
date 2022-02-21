import React from 'react';
import UserIcon from 'react-native-vector-icons/AntDesign';
import NotificationIcon from 'react-native-vector-icons/Ionicons';

import CardNotification from '../CardNotification';
import ModalUserInfo from '../ModalUserInfo';

import * as S from './styles';

const Header = () => {
  const [notification, setNotification] = React.useState(true);
  const [modaVisible, setModalVisible] = React.useState(false);
  const [modaUserInfoVisible, setModaUserInfoVisible] = React.useState(false);

  function handleNotificationRead() {
    setNotification(false);
  }

  return (
    <S.Wrapper>
      <CardNotification
        modalVisible={modaVisible}
        setModalVisible={setModalVisible}
        handleNotificationRead={handleNotificationRead}
      />
      <ModalUserInfo
        modalVisible={modaUserInfoVisible}
        setModalVisible={setModaUserInfoVisible}
      />

      <S.ImageUser onPress={() => setModaUserInfoVisible(true)}>
        <UserIcon name="user" size={18} color="#fcfcfc" />
      </S.ImageUser>
      <S.Location>Webgaz</S.Location>
      <S.Notification onPress={() => setModalVisible(true)}>
        <NotificationIcon
          name="notifications-outline"
          size={22}
          color="#fcfcfc"
        />
        {notification && <S.NotificationCircle />}
      </S.Notification>
    </S.Wrapper>
  );
};

export default Header;
