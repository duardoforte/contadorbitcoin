import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    graphicContainer: {
        width: "90%", // Define a largura do container para 90% da tela
        backgroundColor: "#232323",
        borderRadius: 10,
        alignSelf: "center", // Centraliza na tela
        overflow: "hidden",
        paddingLeft:3, // Garante que a borda arredondada funcione corretamente
    },
    chartStyle: {
        borderRadius: 10, // Aplica borda arredondada no próprio gráfico
        width: "100%", // Garante que o gráfico ocupe toda a área do container
    },
});

export default styles;
