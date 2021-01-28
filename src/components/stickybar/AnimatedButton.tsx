import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import type { AnimatedButtonProps } from './types';

const AnimatedButton = ({ close, children, ...props }: AnimatedButtonProps) => {
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { rotate: withTiming(close.value ? 0 : Math.PI / 4) },
      { scale: withSpring(close.value ? 1.2 : 1) },
    ],
  }));
  return (
    <TouchableOpacity {...props}>
      <Animated.View style={animatedStyle}>{children}</Animated.View>
    </TouchableOpacity>
  );
};

export default AnimatedButton;
