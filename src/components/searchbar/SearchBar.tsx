import React from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import Animated, {
  useAnimatedStyle,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import type { SearchBarProps, TextInputEvent } from './types';
import { styles } from './styles';
import { useComponentLayout, useSearchBar } from '../../hooks';

const SearchBar = React.forwardRef<TextInput, SearchBarProps>(
  (
    {
      searchIcon,
      clearIcon,
      onChangeText: onChangeTextDefault,
      onClear: onClearDefault,
      onFocus: onDefaultFocus,
      onBlur: onDefaultBlur,
      leftIconContainerStyle,
      rightIconContainerStyle,
      cancelButtonTextStyle,
      clearTextOnCancel = false,
      cancelText = 'Cancel',
      containerStyle,
      inputContainerStyle,
      cancelButtonContainerStyle,
      ...props
    },
    ref
  ) => {
    const localRef = React.useRef<TextInput>(null);
    const inputRef = ref || localRef;

    const { setText, empty, focus } = useSearchBar();

    const {
      layout: buttonLayout,
      onLayout: onButtonLayout,
    } = useComponentLayout();

    const onChangeText = React.useCallback(
      (text) => {
        onChangeTextDefault && onChangeTextDefault(text);
        empty.value = text === '';
        setText(text);
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [onChangeTextDefault]
    );

    const onClear = () => {
      // @ts-expect-error
      inputRef?.current?.clear();
      onClearDefault && onClearDefault();
      onChangeText('');
    };

    const onCancel = () => {
      // @ts-expect-error
      inputRef?.current?.blur();
      clearTextOnCancel && onClear();
    };

    const onFocus = (event: TextInputEvent) => {
      onDefaultFocus && onDefaultFocus(event);
      focus.value = true;
    };

    const onBlur = (event: TextInputEvent) => {
      onDefaultBlur && onDefaultBlur(event);
      focus.value = false;
    };

    const animatedButtonBackgroundStyle = useAnimatedStyle(() => ({
      width: withTiming(focus.value ? buttonLayout.width : 0),
    }));

    const animatedButtonStyle = useAnimatedStyle(() => ({
      opacity: withDelay(
        focus.value ? 100 : 0,
        withTiming(focus.value ? 1 : 0)
      ),
      transform: [
        {
          translateX: withDelay(
            focus.value ? 100 : 0,
            withTiming(focus.value ? 0 : buttonLayout.width)
          ),
        },
      ],
    }));

    const animatedCancelButtonStyle = useAnimatedStyle(() => ({
      transform: [
        { scale: withTiming(!empty.value ? 1 : 0, { duration: 200 }) },
      ],
    }));

    return (
      <View style={[styles.container, containerStyle]}>
        <View style={[styles.inputContainer, inputContainerStyle]}>
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
              animatedCancelButtonStyle,
              styles.clearIconContainer,
              rightIconContainerStyle,
            ]}
          >
            <TouchableOpacity onPress={onClear}>{clearIcon}</TouchableOpacity>
          </Animated.View>
        </View>
        <Animated.View style={animatedButtonBackgroundStyle} />
        <Animated.View
          style={[
            animatedButtonStyle,
            styles.cancelButtonContainer,
            cancelButtonContainerStyle,
          ]}
          onLayout={onButtonLayout}
        >
          <TouchableOpacity onPress={onCancel}>
            <Text style={[styles.cancelButtonText, cancelButtonTextStyle]}>
              {cancelText}
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    );
  }
);

export default SearchBar;
