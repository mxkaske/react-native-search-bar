import * as React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import Home from './screens/Home';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeAreaContainer}>
        <StatusBar style="light" />
        <Home />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    backgroundColor: 'black',
    flex: 1,
  },
});
