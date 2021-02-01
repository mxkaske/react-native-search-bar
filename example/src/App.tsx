import * as React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { AppContainer } from './components';
import { enableScreens } from 'react-native-screens';
enableScreens();

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      <AppContainer />
    </SafeAreaProvider>
  );
}
