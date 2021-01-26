import * as React from 'react';
import {
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Text,
} from 'react-native';
import { SearchBar, StickyBar } from 'react-native-search-bar';
import { Feather } from '@expo/vector-icons';
import type { TextInput } from 'react-native';
import faker from 'faker';

const Home = () => {
  const inputRef = React.useRef<TextInput>(null);
  return (
    <KeyboardAvoidingView
      behavior="padding"
      style={styles.KeyboardAvoidingContainer}
    >
      <SearchBar
        ref={inputRef}
        searchIcon={<Feather name="search" color="black" size={20} />}
        clearIcon={<Feather name="x-circle" color="black" size={20} />}
        placeholder="Type here..."
        onClear={() => console.log('clear')}
        autoCorrect={false}
      />
      <ScrollView style={styles.container} keyboardDismissMode="on-drag">
        <Text>{faker.lorem.paragraphs(8)}</Text>
      </ScrollView>
      <StickyBar inputRef={inputRef} />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  KeyboardAvoidingContainer: {
    flex: 1,
    backgroundColor: 'gold',
  },
});

export default Home;
