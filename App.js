import { StyleSheet, Text, StatusBar, SafeAreaView, Platform } from 'react-native';
import React from 'react';

import CurrentPrice from './src/components/CurrentPrice/'
import HistoryGraphic from './src/components/HistoryGraphic/'
import QuotationsList from './src/components/QuotationsList/'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>

      <StatusBar 
      backgroundColor='#f5980d'
      barStyle='light-content'/>
      <CurrentPrice/>
      <HistoryGraphic/>
      <QuotationsList/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    paddingTop: Platform.OS === "android" ? 40: 0,
  },

});
