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

const lorem = faker.lorem.paragraphs(8);

const Home = () => {
  const inputRef = React.useRef<TextInput>(null);
  const [value, setValue] = React.useState('');

  const addWord = () => setValue(`${value} ${faker.random.word()}`);

  const icons = [
    { name: 'bookmark', onPress: () => addWord() },
    { name: 'at-sign', onPress: () => addWord() },
    { name: 'bar-chart-2', onPress: () => addWord() },
    { name: 'star', onPress: () => addWord() },
    { name: 'trash-2', onPress: () => addWord() },
  ];

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
        value={value}
        clearTextOnCancel
        onChangeText={(text) => setValue(text)}
      />
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        keyboardDismissMode="on-drag"
      >
        <Text>{lorem}</Text>
      </ScrollView>
      <StickyBar
        inputRef={inputRef}
        containerStyle={styles.stickyBarStyle}
        //closeIcon={<Feather name="x" color="white" size={24} />}
      >
        {icons.map(({ name, onPress }) => (
          <StickyBar.Icon key={name}>
            <Feather.Button
              //@ts-expect-error
              name={name}
              onPress={onPress}
              color="white"
              backgroundColor="black"
              iconStyle={styles.iconStyle}
            />
          </StickyBar.Icon>
        ))}
      </StickyBar>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
  },
  KeyboardAvoidingContainer: {
    flex: 1,
    backgroundColor: 'gold',
  },
  stickyBarStyle: {},
  iconStyle: { marginRight: 0 },
});

export default Home;
