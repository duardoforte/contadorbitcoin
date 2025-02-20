import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

export default function QuotationsItems(){
    return(
        <View style={styles.mainContent}>
            <View style={styles.contextLeft}>
            <View style={styles.boxLogo}>
                <Image style={styles.logBitcoin} 
                source={require("../../../img/bitcoin_logo.png")}
                />
                <Text style={styles.dayCotation}>20/02/2025</Text>
            </View>
            </View>
            <View style={styles.contextRight}>
                <Text style={styles.price}>$ 53331.052</Text>
            </View>
        </View>
    )
}