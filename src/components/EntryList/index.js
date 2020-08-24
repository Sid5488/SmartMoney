/* eslint-disable prettier/prettier */
import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';

import EntryListItem from './EntryListItem';

const EntryList = ({ data }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Últimos Lançamentos</Text>
      <FlatList
        data={ data }
        renderItem={({ item }) => (
          <Text>- {item.description} - ${ item.amount } </Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      // flex: 1,
    },
    title: {
      fontSize: 22,
      fontWeight: 'bold',
      marginVertical: 10,
    },
});

export default EntryList;
