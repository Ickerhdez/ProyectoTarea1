import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from './src/customButton';
import React, { useState } from 'react';
import CustomInput from './src/CustomInput';

export default function App() {
  const [email, setEmail] = useState("userexample.com"); // invalid, no @
  const [password, setPassword] = useState("abcd"); // valid (length 4)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Demo: inputs para evidencia</Text>
      <CustomInput 
        onChangeText={setEmail} 
        value={email} 
        placeholder={'Ingresa tu correo'} 
        type='email'     
      />
      <CustomInput 
        onChangeText={setPassword} 
        value={password} 
        placeholder={'Ingresa tu contraseña'} 
        type='password'     
      />
      <CustomButton title ="Enviar" onPress={()=>{console.log({email, password})}}/>
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
    padding: 20,
  },
  title: {
    fontSize: 18,
    marginBottom: 12,
  }
});