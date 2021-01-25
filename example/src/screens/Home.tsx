import * as React from 'react';
import { StyleSheet, ScrollView, KeyboardAvoidingView } from 'react-native';
import ReanimatedExpoBuilderBob, {
  SearchBar,
  StickyBar,
} from 'react-native-search-bar';
import { Feather } from '@expo/vector-icons';

const Home = () => {
  return (
    <KeyboardAvoidingView
      behavior="padding"
      style={styles.KeyboardAvoidingContainer}
    >
      <SearchBar
        searchIcon={<Feather name="search" color="black" size={20} />}
        clearIcon={<Feather name="x" color="black" size={20} />}
        placeholder="Type here..."
        onClear={() => console.log('clear')}
        autoCorrect={false}
      />
      <ScrollView style={styles.container} keyboardDismissMode="on-drag">
        <ReanimatedExpoBuilderBob />
      </ScrollView>
      <StickyBar />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  KeyboardAvoidingContainer: {
    flex: 1,
    backgroundColor: 'orange',
  },
});

export default Home;
