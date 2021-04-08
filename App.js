import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Interface from './src/componentes/interface';

import Face from './src/componentes/interface'

export default function App() {
  return (
    <Interface>
      <Text>Olaaaa</Text>
    </Interface>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
