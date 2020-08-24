/* eslint-disable prettier/prettier */
import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';

const List = ({ data }) => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Categorias</Text>

        <FlatList
        data={ data }
        renderItem={({ item }) => (
          <Text>- {item.description} - ${item.amount } </Text>
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
      marginTop: 10,
      marginBottom: 10,
    },
});

export default List;
