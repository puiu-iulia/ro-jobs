import React from 'react';
import { View, StyleSheet } from 'react-native';

const Spacer = ({ children, style }) => {
  return <View style={{...style, ...styles.spacer}}>{children}</View>;
};

const styles = StyleSheet.create({
  spacer: {
    margin: 16
  }
});

export default Spacer;
