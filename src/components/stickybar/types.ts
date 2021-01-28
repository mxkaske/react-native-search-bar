import type {
  StyleProp,
  TextInput,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import type Animated from 'react-native-reanimated';
export interface StickyBarProps {
  inputRef: React.Ref<TextInput>;
  children: React.ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
  closeIcon: React.ReactNode;
}

export interface AnimatedButtonProps extends TouchableOpacityProps {
  close: Animated.SharedValue<boolean>;
  children: React.ReactNode;
}
