import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom: "0%",
      paddingTop: "0%"
    },
    img:{
      width: 200,
      height: 200
    },
    title:{
      fontSize: 30,
      color: "#fff",
      marginTop: 10
    },
    btn:{
      backgroundColor: "#fff",
      border: "solid",
      width: "44%",
      height: 45,
      marginTop: 18,
      borderRadius: 20,
      textAlign: "center",
      paddingTop: 8,
      marginBottom: "0%",
      borderTopColor: "#E398AA",
      borderBottomColor: "#E398AA",
      borderLeftColor: "#E398AA",
      borderRightColor: "#E398AA",
    },
    txtBtn:{
      fontSize: 18,
      fontWeight: "500",
      color: "#E398AA",
      paddingBottom: "0%"
    }
});

export default styles;
