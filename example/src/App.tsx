import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import ReanimatedExpoBuilderBob from 'reanimated-expo-builder-bob';

export default function App() {
  return (
    <View style={styles.container}>
      <ReanimatedExpoBuilderBob />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
