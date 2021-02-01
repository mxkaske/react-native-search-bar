import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import type { TextInput } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { useSearchBar } from 'react-native-search-bar';

interface HomeProps {
  inputRef: React.Ref<TextInput>;
}

const Home = ({}: HomeProps) => {
  const { text, empty, focus } = useSearchBar();
  const animatedStyle = useAnimatedStyle(() => ({
    backgroundColor: empty.value ? 'blue' : focus.value ? 'red' : 'green',
  }));

  const animatedFocusStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: withSpring(focus.value ? 0 : -100) }],
    opacity: withTiming(focus.value ? 1 : 0),
  }));

  const animatedEmptyStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: withSpring(empty.value ? 0 : -100) }],
    opacity: withTiming(empty.value ? 1 : 0),
  }));

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <View style={styles.descriptionContainer}>
        <Animated.Text style={[styles.text, animatedEmptyStyle]}>
          input field is empty
        </Animated.Text>
        <Animated.Text style={[styles.text, animatedFocusStyle]}>
          input field is focused
        </Animated.Text>
      </View>
      <Text style={styles.text}>input value: {text}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gold',
    padding: 16,
  },
  descriptionContainer: {
    paddingBottom: 16,
  },
  text: {
    color: 'white',
  },
});

export default Home;
