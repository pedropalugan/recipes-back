import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ff7020',
    },
    btn:{
      backgroundColor: "#f68b1f",
      width: "50%",
      height: 40,
      marginTop: 10,
      borderRadius: 20,
      textAlign: "center",
      paddingTop: 10,
      marginBottom: 5
    },
    txtBtn:{
      fontSize: 16,
      fontWeight: "400"
    },
    viewConta:{
        display: "flex",
        flexDirection: "row"
    },
    txtConta:{
        color: "#fff",
        fontSize: 15,
        display: "flex"
    },
    txtLink:{
        display: "flex",
        color: "#f68b1f",
        marginLeft: 5,
        textDecorationLine: "underline"
    },
    img:{
      marginTop: 4,
      width: 80,
      height: 32,
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "flex-end"
    },
    imgBandeira:{
      width: 40,
      height: 26,
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "flex-end",
      flexDirection: "row",
      backgroundColor: "#fff",
      borderColor: "#fff",
      borderWidth: 4
    },
    viewHeader:{
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      marginLeft: 15,
      marginRight: 15,
      marginTop: 8
    },
    viewHeaderBandeira:{
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      marginLeft: 15,
      marginRight: 15,
      marginTop: 5,
    },
    txtHeader:{
      display: "flex",
      flexDirection: "row",
      paddingLeft: 5,
      paddingRight: 5,
      paddingTop: 2,
      fontSize: 15,
      backgroundColor: "#fff",
      height: 26,
      color: "#f68b1f",
    },
    viewMsg:{
      marginLeft: "4%"
      
    },
    title:{
      fontSize: 26,
      color: "#fff",
      marginTop: 1
    },
    txtBemVindo:{
      fontSize: 20,
      color: "#fff",
      marginBottom: 20
    },
    viewLogo:{
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      marginLeft: 3,
      marginRight: 15,
      marginTop: 5,
    },
    viewLogo:{
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      marginLeft: 3,
      marginRight: 15,
      marginTop: 5,
      paddingBottom: 8,
      borderBottomWidth: 1,
      borderBottomColor: "#d1d1d1"
    },
    imgLogo1:{
      width: 50,
      height: 50,
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "flex-end",
    },
    txtOpc1:{
      display: "flex",
      flexDirection: "row",
      paddingLeft: 5,
      paddingRight: 5,
      paddingTop: 2,
      marginTop: 10,
      fontSize: 24,
      height: 26,
      color: "#fff"
    },
    seta:{
      fontSize: 30,
      color: "#fff",
      marginTop: 20
    },
});

export default styles;
