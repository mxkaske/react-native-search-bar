import React from 'react';
import {
  View,
  TouchableOpacity,
  Keyboard,
  KeyboardEventListener,
} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { useComponentLayout } from '../../hooks';
import { styles } from './styles';
import type { StickyBarProps } from './types';

const StickyBar = ({ inputRef }: StickyBarProps) => {
  const { layout, onLayout } = useComponentLayout();
  const focus = useSharedValue(false);

  const subscribe: KeyboardEventListener = React.useCallback(() => {
    // @ts-expect-error
    const inputFocus = inputRef?.current?.isFocused();
    focus.value = inputFocus;
  }, [inputRef, focus]);

  // keyboardWillHide | keyboardWillShow | keyboardDidHide | keyboardDidShow
  React.useEffect(() => {
    Keyboard.addListener('keyboardWillShow', subscribe);
    Keyboard.addListener('keyboardWillHide', subscribe);
    return () => {
      Keyboard.removeListener('keyboardWillShow', subscribe);
      Keyboard.removeListener('keyboardWillHide', subscribe);
    };
  }, [subscribe]);

  const animatedContainer = useAnimatedStyle(
    () => ({
      opacity: withTiming(focus.value ? 1 : 0.9, { duration: 1000 }),
      transform: [{ translateY: withTiming(focus.value ? 0 : layout.height) }],
    }),
    [layout]
  );

  const animatedBackgroundContainerStyle = useAnimatedStyle(() => ({
    height: focus.value ? layout.height : 0,
  }));

  return (
    <View>
      <Animated.View style={animatedBackgroundContainerStyle} />
      <Animated.View
        style={[animatedContainer, styles.container]}
        onLayout={onLayout}
      >
        {['chartreuse', 'darkorange', 'lightskyblue', 'mediumslateblue'].map(
          (color, idx) => (
            <TouchableOpacity key={idx}>
              <View style={[styles.dot, { backgroundColor: color }]} />
            </TouchableOpacity>
          )
        )}
      </Animated.View>
    </View>
  );
};

export default StickyBar;
