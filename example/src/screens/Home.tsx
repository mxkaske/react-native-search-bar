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
  const [value, setValue] = React.useState('');

  const icons = [
    { name: 'bookmark', onPress: () => setValue((text) => `${text}, is:`) },
    { name: 'at-sign', onPress: () => setValue((text) => `${text}, is:`) },
    { name: 'bar-chart-2', onPress: () => setValue((text) => `${text}, is:`) },
    { name: 'star', onPress: () => setValue((text) => `${text}, is:`) },
    { name: 'trash-2', onPress: () => setValue((text) => `${text}, is:`) },
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
        onChangeText={(text) => setValue(text)}
      />
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        keyboardDismissMode="on-drag"
      >
        <Text>{faker.lorem.paragraphs(8)}</Text>
      </ScrollView>
      <StickyBar inputRef={inputRef} containerStyle={styles.stickyBarStyle}>
        {icons.map(({ name, onPress }) => (
          <Feather.Button
            //@ts-expect-error
            name={name}
            onPress={onPress}
            color="white"
            backgroundColor="black"
            iconStyle={styles.iconStyle}
          />
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
  stickyBarStyle: {
    height: 50,
  },
  iconStyle: { marginRight: 0 },
});

export default Home;
