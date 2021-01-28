import React from 'react';
import type { StickyBarIconProps } from './types';
import { useStickyBar } from '../../hooks';
import Animated, {
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

const StickyBarIcon = ({ children, ...props }: StickyBarIconProps) => {
  const { focus, close } = useStickyBar();
  const animatedStyle = useAnimatedStyle(() => ({
    opacity: withTiming(focus.value && !close.value ? 1 : 0, { duration: 600 }),
    transform: [
      { translateX: withTiming(focus.value ? 0 : 100, { duration: 600 }) },
    ],
  }));
  return (
    <Animated.View style={animatedStyle} {...props}>
      {children}
    </Animated.View>
  );
};

export default StickyBarIcon;
