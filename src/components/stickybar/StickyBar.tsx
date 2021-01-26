import React from 'react';
import { View, TouchableOpacity, Keyboard } from 'react-native';
import { styles } from './styles';
import type { StickyBarProps } from './types';

const StickyBar = ({ inputRef }: StickyBarProps) => {
  const [isFocused, setIsFocused] = React.useState(false);

  const subscribe = React.useCallback(() => {
    // @ts-expect-error
    const focus = inputRef?.current?.isFocused();
    setIsFocused(focus);
  }, [inputRef]);

  // keyboardWillHide | keyboardWillShow | keyboardDidHide
  React.useEffect(() => {
    Keyboard.addListener('keyboardDidShow', subscribe);
    Keyboard.addListener('keyboardWillHide', subscribe);
    return () => {
      Keyboard.removeListener('keyboardDidShow', subscribe);
      Keyboard.removeListener('keyboardWillHide', subscribe);
    };
  }, [subscribe]);

  return (
    <>
      {isFocused && (
        <View style={styles.container}>
          {['chartreuse', 'darkorange', 'lightskyblue', 'mediumslateblue'].map(
            (color, idx) => (
              <TouchableOpacity key={idx}>
                <View style={[styles.dot, { backgroundColor: color }]} />
              </TouchableOpacity>
            )
          )}
        </View>
      )}
    </>
  );
};

export default StickyBar;
