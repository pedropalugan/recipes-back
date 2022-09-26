import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
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
    txtCad:{
      fontSize: 30,
      color: "#E398AA",
      marginTop: 10
    },
    viewCadastro:{
      justifyContent:"center",
      alignItems: "center",
      marginTop: 150
    },
    input:{
      borderColor: "#E398AA",
      borderWidth: 2,
      borderRadius: 5,
      width: "70%",
      height: 40,
      marginTop: 15,
      color: "#E398AA",
      paddingLeft: 4,
      fontSize: 18
    },
    btn:{
      backgroundColor: "#fff",
      width: "44%",
      height: 45,
      marginTop: 10,
      borderRadius: 20,
      textAlign: "center",
      paddingTop: 8,
      marginBottom: 5,
      borderWidth: 1,
      borderColor: "#E398AA",
    },
    txtBtn:{
      fontSize: 18,
      fontWeight: "500",
      color: "#E398AA"
    },
    seta:{
      fontSize: 30,
      color: "#E398AA",
      marginTop: 20,
      marginLeft: 5
    },
});

export default styles;
