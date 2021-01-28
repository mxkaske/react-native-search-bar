import * as React from 'react';
import {
  StyleSheet,
  KeyboardAvoidingView,
  Text,
  FlatList,
  View,
  Platform,
} from 'react-native';
import { SearchBar, StickyBar } from 'react-native-search-bar';
import { Feather } from '@expo/vector-icons';
import type { TextInput } from 'react-native';

type Item = {
  text: string;
  name: string;
};

const isIOS = Platform.OS === 'ios';

const Home = () => {
  const [items, setItems] = React.useState<Item[]>([
    { text: 'Hello World', name: 'check' },
  ]);
  const inputRef = React.useRef<TextInput>(null);
  const [value, setValue] = React.useState('');

  // const addWord = () => setValue(`${faker.random.word()}`);

  const addItem = (name: string) => {
    if (value !== '') {
      setItems((currentItems) => [{ name, text: value }, ...currentItems]);
      setValue('');
    }
  };

  const icons = [
    { name: 'bookmark', onPress: () => addItem('bookmark') },
    { name: 'check', onPress: () => addItem('check') },
    { name: 'heart', onPress: () => addItem('heart') },
    { name: 'hash', onPress: () => addItem('hash') },
    { name: 'at-sign', onPress: () => addItem('at-sign') },
  ];

  return (
    <KeyboardAvoidingView
      behavior={isIOS ? 'padding' : 'height'}
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
        cancelButtonTextStyle={styles.cancelButtonTextStyle}
      />
      <FlatList
        data={items}
        keyExtractor={(item, index) => `${item.text}-${index}`}
        renderItem={({ item }) => (
          <View style={styles.itemContainerStyle}>
            {/* @ts-expect-error */}
            <Feather name={item.name} color="black" size={16} />
            <Text style={styles.itemTextStyle}>{item.text}</Text>
          </View>
        )}
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        keyboardDismissMode="on-drag"
      />
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
              color="gold"
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
  cancelButtonTextStyle: { color: 'gold' },
  iconStyle: { marginRight: 0 },
  itemContainerStyle: {
    flexDirection: 'row',
    paddingBottom: 12,
    borderBottomWidth: 1,
    marginBottom: 12,
  },
  itemTextStyle: {
    paddingLeft: 8,
  },
});

export default Home;
