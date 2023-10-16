import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Welcome  from './src/pages/Welcome'
import routes from './src/routes'

// import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello Again!!!</Text>
      <StatusBar style={styles.statusBarContainer} />
      <Welcome />
      <Routes />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    alingItems: 'center',
    justifyContent: 'center',
    margin: 5,
    padding: 20
  },
  statusBarContainer: {
    backgroundColor: '#000',
    barStyle: 'light-content'
  }
}
)