import React from 'react';
import {Text, StyleSheet} from 'react-native';

export default function index({children}) {
  return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: '#4d4c4c',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    borderBottomColor: '#c7c7c7',
    borderBottomWidth: 1,
    paddingBottom: 5,
    backgroundColor: '#fdfd7f',
    paddingTop: 5,
  },
});
