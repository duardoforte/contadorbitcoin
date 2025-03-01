import React from 'react';
import { View, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import styles from './styles'; // Importando os estilos

export default function HistoryGraphic({ data }) {
    const validData = data.length > 0 ? data : [0]; // Evita erro no gráfico
    const screenWidth = Dimensions.get("window").width; // Largura da tela

    return (
        <View style={styles.graphicContainer}> {/* Container arredondado */}
            <LineChart
                data={{
                    datasets: [{ data: validData }],
                }}
                width={screenWidth * 0.9} // O gráfico ocupa toda a borda
                height={220}
                yAxisLabel="R$"
                yAxisSuffix="k"
                withVerticalLines={false}
                yLabelsOffset={1}
                withVerticalLabels={false}
                chartConfig={{
                    backgroundColor: "#000000",
                    backgroundColorGradientFrom: "#f5980d",
                    backgroundGradientTo:"#3F3F3F",
                    decimalPlaces: 0,
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    propsForDots: {
                        r: "1",
                        strokeWidth: "1",
                        stroke: "#f5980d",
                    },
                }}
                bezier
                style={styles.chartStyle} // Aplica borda arredondada ao gráfico
            />
        </View>
    );
}
