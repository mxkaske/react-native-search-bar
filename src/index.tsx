import * as React from 'react';
import { Button, StyleSheet } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

const AnimatedComponent = () => {
  const width = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => ({
    width: width.value,
  }));
  return (
    <>
      <Animated.View style={[style.box, animatedStyle]} />
      <Button
        title="press me"
        onPress={() => {
          width.value = withSpring(Math.random() * 100);
        }}
      />
    </>
  );
};

const style = StyleSheet.create({
  box: {
    backgroundColor: 'red',
    height: 30,
  },
});

export default AnimatedComponent;
