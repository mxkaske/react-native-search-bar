import React from 'react';
import { View, TextInput } from 'react-native';
import type { SearchBarProps } from './types';
import { styles } from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

const SearchBar = ({
  searchIcon,
  clearIcon,
  onChangeText: onChangeTextDefault,
  onClear: onClearDefault,
  ...props
}: SearchBarProps) => {
  const [isEmpty, setIsEmpty] = React.useState(true);
  const inputRef = React.useRef<TextInput>(null);

  const onChangeText = React.useCallback(
    (text) => {
      onChangeTextDefault && onChangeTextDefault(text);
      // not very efficient as it will cause rerender everytime text changes
      setIsEmpty(text === '');
    },
    [onChangeTextDefault]
  );

  const onClear = () => {
    inputRef.current?.clear();
    onClearDefault && onClearDefault();
    onChangeText('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <View style={styles.searchIconContainer}>{searchIcon}</View>
        <TextInput
          ref={inputRef}
          style={styles.input}
          onChangeText={onChangeText}
          {...props}
        />
        <View style={styles.clearIconContainer}>
          {!isEmpty && (
            <TouchableOpacity onPress={onClear}>{clearIcon}</TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

export default SearchBar;
