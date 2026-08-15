import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from './src/customButton';
import CustomInput from './src/CustomInput';
import React, { useState } from 'react';

export default function App() {
  const [inputValue, setInputValue] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Open up App.tsx to start working on your app!</Text>
      <CustomInput
        placeholder="Escribe aquí..."
        value={inputValue}
        onChangeText={setInputValue}
      />
      <Text style={styles.valueText}>Valor actual: {inputValue}</Text>
      <CustomButton title="Mi Boton 1" onPress={() => console.log('1')} />
      <CustomButton title="Mi Boton 2" onPress={() => console.log('2')} variant="secondary" />
      <CustomButton title="Mi Boton 3" onPress={() => console.log('3')} variant="tertiary" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    marginBottom: 20,
    fontSize: 16,
  },
  valueText: {
    marginBottom: 16,
    fontSize: 14,
    color: '#333',
  },
});