import React from 'react';
import {ActivityIndicator, View, StyleSheet} from 'react-native';

export type LoadinProps = {
  color: string;
  size: 'small' | 'large';
};

const Loading: React.FC<LoadinProps> = ({size, color}: LoadinProps) => {
  return (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

export default Loading;
