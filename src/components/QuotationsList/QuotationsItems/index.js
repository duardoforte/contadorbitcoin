
import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

export default function QuotationsItems({ valor, data }) {
  return (
    <View style={styles.mainContent}>
      <View style={styles.contextLeft}>
        <View style={styles.boxLogo}>
          <Image style={styles.logBitcoin} source={require("../../../img/bitcoin_logo.png")} />
          <Text style={styles.dayCotation}>{data}</Text>
        </View>
      </View>
      <View style={styles.contextRight}>
        <Text style={styles.price}>R$ {valor}</Text>
      </View>
    </View>
  );
}