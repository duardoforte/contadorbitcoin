import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    mainContent: {
        width:"95%",
        height:"auto",
        backgroundColor:"#000000",
        marginLeft:"3%",
        marginBottom:15,
        borderRadius:10,
        flexDirection:"row",
        alignItems:"center",
        padding:10,
    },
    logBitcoin:{
        width:40,
        height:40,
        marginLeft:2,
    },
    price:{
        fontWeight:"bold",
        color:'white',
        fontSize:18,
    },
    boxLogo:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
    contextLeft:{
        width:'36%',
        alignItems:'flex-start',
    },
    contextRight:{
        width:'60%',
        alignItems:'flex-end',
    },
    dayCotation:{
        fontSize:16,
        paddingLeft:2,
        color:"#FFFFFF",
        fontWeight:'bold',
    },
});

export default styles