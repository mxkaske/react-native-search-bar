import type { StyleProp, TextInput, ViewStyle } from 'react-native';
export interface StickyBarProps {
  inputRef: React.Ref<TextInput>;
  children: React.ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
}
