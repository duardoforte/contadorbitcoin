import React, { Fragment } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import styles from './styles';
import QuotationsItems from './QuotationsItems';

export default function QuotationsList({ filterDay, listTransactions }) {
  const periods = [
    { label: "7D", value: 7 },
    { label: "15D", value: 15 },
    { label: "1M", value: 30 }, // 30D -> 1M
    { label: "3M", value: 90 }, // 90D -> 3M
    { label: "6M", value: 180 } // 180D -> 6M
  ];

  return (
    <Fragment>
      <View style={styles.filters}>
        {periods.map((period) => (
          <TouchableOpacity
            key={period.value}
            style={styles.buttonQuery}
            onPress={() => filterDay(period.value)}
          >
            <Text style={styles.textButtonQuery}>{period.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <FlatList
        data={listTransactions}
        keyExtractor={(item) => item.data}
        renderItem={({ item }) => <QuotationsItems valor={item.valor} data={item.data} />}
      />
    </Fragment>
  );
}
