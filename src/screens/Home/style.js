import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    viewMsg:{
      marginLeft: "4%"
    },
    msgOla:{
      fontSize: 19,
      color: "#E398AA",
      marginTop: 25
    },
    txtBemVindo:{
      fontSize: 19,
      color: "#E398AA",
      marginBottom: 20
    },
    viewLogo:{
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      marginLeft: 5 ,
      marginRight: 5,
      marginTop: 15,
      paddingBottom: 8,
      borderWidth: 1,
      borderTopColor: "#E398AA",
      borderBottomColor: "#E398AA",
      borderLeftColor: "#E398AA",
      borderRightColor: "#E398AA",
      borderRadius: 14
    },
    viewHeader:{
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      textAlign: "center",
      alignItems: "center",
      marginLeft: 15,
      marginRight: 15,
      marginTop: 8
    },
    txtOpc1:{
      display: "flex",
      textAlign: 'center',
      alignItems: 'center',
      paddingRight: 5,
      paddingTop: 0,
      paddingBottom: 5,
      marginTop: 0,
      fontSize: 20,
      height: 26,
      color: "#E398AA"
    },
    seta:{
      fontSize: 30,
      color: "#E398AA",
      marginTop: 10
    },
});

export default styles;
