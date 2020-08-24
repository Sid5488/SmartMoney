/* eslint-disable prettier/prettier */
import React from 'react';
import { View, StyleSheet } from 'react-native';

import Chart from './Chart';
import List from './List';

const EntrySummary = ({ dataSummary }) => {
  return (
    <View style={styles.container}>
      <Chart />
      <List data={ dataSummary } />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      // flex: 1,
    },
});

export default EntrySummary;
