/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

import Label from './Label';
import Chart from './Chart';

const BalancePanel = ({ currentBalance }) => {
  return (
    <View style={styles.container}>
      <Label currentBalance={ currentBalance } />
      <Chart />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
});

export default BalancePanel;
