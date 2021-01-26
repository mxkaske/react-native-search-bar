import React from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import type { SearchBarProps, TextInputEvent } from './types';
import { styles } from './styles';
import { useComponentLayout } from '../../hooks';

const SearchBar = ({
  searchIcon,
  clearIcon,
  onChangeText: onChangeTextDefault,
  onClear: onClearDefault,
  onFocus: onDefaultFocus,
  onBlur: onDefaultBlur,
  leftIconContainerStyle,
  rightIconContainerStyle,
  ...props
}: SearchBarProps) => {
  const empty = useSharedValue(true);
  const focus = useSharedValue(false);
  const inputRef = React.useRef<TextInput>(null);
  const {
    layout: buttonLayout,
    onLayout: onButtonLayout,
  } = useComponentLayout();

  const onChangeText = React.useCallback(
    (text) => {
      onChangeTextDefault && onChangeTextDefault(text);
      empty.value = text === '';
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [onChangeTextDefault]
  );

  const onClear = () => {
    inputRef.current?.clear();
    onClearDefault && onClearDefault();
    onChangeText('');
  };

  const onCancel = () => {
    inputRef.current?.blur();
  };

  const onFocus = (event: TextInputEvent) => {
    onDefaultFocus && onDefaultFocus(event);
    focus.value = true;
  };

  const onBlur = (event: TextInputEvent) => {
    onDefaultBlur && onDefaultBlur(event);
    focus.value = false;
  };

  const animatedButtonBackground = useAnimatedStyle(() => ({
    width: withTiming(focus.value ? buttonLayout.width : 0),
  }));

  const animatedButton = useAnimatedStyle(() => ({
    opacity: withDelay(focus.value ? 100 : 0, withTiming(focus.value ? 1 : 0)),
    transform: [
      {
        translateX: withDelay(
          focus.value ? 100 : 0,
          withSpring(focus.value ? 0 : buttonLayout.width)
        ),
      },
    ],
  }));

  const animatedCancelButton = useAnimatedStyle(() => ({
    transform: [{ scale: withTiming(!empty.value ? 1 : 0, { duration: 200 }) }],
  }));

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <View style={[styles.searchIconContainer, leftIconContainerStyle]}>
          {searchIcon}
        </View>
        <TextInput
          ref={inputRef}
          style={styles.input}
          testID="searchInput"
          onChangeText={onChangeText}
          onBlur={onBlur}
          onFocus={onFocus}
          {...props}
        />
        <Animated.View
          style={[
            animatedCancelButton,
            styles.clearIconContainer,
            rightIconContainerStyle,
          ]}
        >
          <TouchableOpacity onPress={onClear}>{clearIcon}</TouchableOpacity>
        </Animated.View>
      </View>
      <Animated.View style={animatedButtonBackground} />
      <Animated.View
        style={[animatedButton, styles.cancelButtonContainer]}
        onLayout={onButtonLayout}
      >
        <TouchableOpacity onPress={onCancel}>
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default SearchBar;
