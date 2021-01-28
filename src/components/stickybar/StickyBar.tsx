import React from 'react';
import { Keyboard, KeyboardEventListener, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { StickyBarProvider } from '../../contexts';
import { useComponentLayout } from '../../hooks';
import AnimatedButton from './AnimatedButton';
import StickyBarIcon from './StickyBarIcon';
import { styles } from './styles';
import type { StickyBarProps } from './types';

const StickyBar = ({
  inputRef,
  children,
  containerStyle,
  closeIcon,
}: StickyBarProps) => {
  const { layout, onLayout } = useComponentLayout();
  const focus = useSharedValue(false);
  const close = useSharedValue(false);

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
      transform: [
        { translateY: withTiming(focus.value ? 0 : layout.height) },
        { translateX: withTiming(close.value ? -layout.width + 80 : 0) },
      ],
    }),
    [layout]
  );

  const animatedBackgroundContainerStyle = useAnimatedStyle(() => ({
    height: focus.value ? layout.height : 0,
  }));

  return (
    <StickyBarProvider value={{ focus, close }}>
      <View>
        <Animated.View style={[animatedBackgroundContainerStyle]} />
        <Animated.View
          style={[animatedContainer, styles.container, containerStyle]}
          onLayout={onLayout}
        >
          {children}
          {closeIcon ? (
            <AnimatedButton
              close={close}
              onPress={() => (close.value = !close.value)}
            >
              {closeIcon}
            </AnimatedButton>
          ) : null}
        </Animated.View>
      </View>
    </StickyBarProvider>
  );
};

StickyBar.Icon = StickyBarIcon;

export default StickyBar;
