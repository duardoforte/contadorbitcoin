import { StyleSheet, StatusBar, SafeAreaView, Platform } from 'react-native';
import React, { useState, useEffect } from 'react';

import CurrentPrice from './src/components/CurrentPrice/';
import HistoryGraphic from './src/components/HistoryGraphic/';
import QuotationsList from './src/components/QuotationsList/';

// Binance API endpoints
const BINANCE_API_URL = 'https://api.binance.com/api/v3';
const BINANCE_TICKER_PRICE_URL = `${BINANCE_API_URL}/ticker/price?symbol=BTCBRL`;
const BINANCE_KLINE_URL = (interval, limit) =>
  `${BINANCE_API_URL}/klines?symbol=BTCBRL&interval=${interval}&limit=${limit}`;

async function getLatestPrice() {
  try {
    const response = await fetch(BINANCE_TICKER_PRICE_URL);
    const data = await response.json();
    return Number(data.price).toFixed(2); // Format to 2 decimal places
  } catch (error) {
    console.error('Erro ao buscar preço atual:', error);
    return "0.00";
  }
}

async function getHistoricalData(interval = '1d', limit = 30) {
  try {
    const response = await fetch(BINANCE_KLINE_URL(interval, limit));
    const data = await response.json();

    // Format historical data
    const formattedData = data.map((item) => ({
      time: item[0], // Timestamp
      price: Number(item[4]), // Closing price
    }));

    return formattedData.reverse(); // Reverse to show latest first
  } catch (error) {
    console.error('Erro ao buscar dados históricos:', error);
    return [];
  }
}

export default function App() {
  const [coinsList, setCoinsList] = useState([]);
  const [coinsGraphicList, setCoinsGraphicList] = useState([]);
  const [price, setPrice] = useState("0.00");
  const [days, setDays] = useState(30);

  // Function to update the number of days
  function updateDay(number) {
    setDays(number);
  }

  // Fetch latest price and historical data
  const fetchData = async () => {
    try {
      // Fetch latest price
      const latestPrice = await getLatestPrice();
      setPrice(latestPrice);

      // Fetch historical data
      const historicalData = await getHistoricalData('1d', days);
      setCoinsList(
        historicalData.map((item) => ({
          data: new Date(item.time).toLocaleDateString('pt-BR'),
          valor: item.price.toFixed(2),
        }))
      );

      // Extract prices for the graph
      const graphicData = historicalData.map((item) => item.price);
      setCoinsGraphicList(graphicData);
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  };

  // Fetch data on component mount and when days change
  useEffect(() => {
    fetchData();
  }, [days]);

  // Auto-refresh every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      fetchData();
    }, 30000); // 30 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#f5980d" barStyle="light-content" />
      <CurrentPrice lastCotation={price} />
      <HistoryGraphic data={coinsGraphicList.length > 0 ? coinsGraphicList : [0]} />
      <QuotationsList filterDay={updateDay} listTransactions={coinsList} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? 40 : 0,
  },
});