import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import StackNavigator from './src/navigation/StackNavigator';
import { navigationRef } from './src/navigation/NavigationService';
import { ThemeProvider, useTheme } from './src/context/ThemeContext';

function AppContent() {
  const { isDark } = useTheme();

  return (
    <>
      <StatusBar style={isDark ? 'light' : 'dark'} />
      <NavigationContainer ref={navigationRef}>
        <StackNavigator />
      </NavigationContainer>
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
