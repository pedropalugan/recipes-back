import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ff7020',
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
});

export default styles;
