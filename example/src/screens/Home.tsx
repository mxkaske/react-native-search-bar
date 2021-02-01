import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import type { TextInput } from 'react-native-gesture-handler';

interface HomeProps {
  inputRef: React.Ref<TextInput>;
}

const Home = ({}: HomeProps) => {
  return <View style={styles.container} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gold',
  },
});

export default Home;
