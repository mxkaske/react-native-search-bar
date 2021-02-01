import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import type { AppNavigationProps } from '../components/Navigation';

const Start = ({ navigation }: AppNavigationProps<'Start'>) => {
  return (
    <View style={styles.container}>
      <Button title="Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Start;
