import React from 'react';
import { View, Text, StatusBar,} from 'react-native';
import {StyleSheet} from 'react-native'


import Routes from './src/routes';


function App() {
  return (
    <View style={styles.container}>
      <StatusBar />
      <Routes />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})

export default App;