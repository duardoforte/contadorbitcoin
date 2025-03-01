import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

export default function CurrentPrice({ lastCotation }) {
    return (
        <View style={styles.headerPrice}>
            <Text style={styles.textPrice}>Cotação Mais Recente</Text>
            <Text style={styles.currentPrice}>
                R$ {lastCotation || "0.00"}
            </Text>
            
        </View>
    );
}