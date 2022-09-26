import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    imgHeader:{
      width: 100,
      height: 100,
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "flex-end",
      flexDirection: "row",
      backgroundColor: "#fff000",
      borderColor: "#fff",
      borderWidth: 4
    },
    viewHeader:{
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      marginLeft: 15,
      marginRight: 15,
      marginTop: 35
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
      paddingLeft: 12,
      paddingRight: 12,
      paddingTop: 2,
      fontSize: 15,
      backgroundColor: "#E398AA",
      height: 26,
      color: "#fff",
      borderRadius: 15
    },
});

export default styles;
