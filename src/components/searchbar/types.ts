import type {
  NativeSyntheticEvent,
  StyleProp,
  TextInputFocusEventData,
  TextInputProps,
  ViewProps,
} from 'react-native';

export interface SearchBarProps extends TextInputProps {
  searchIcon: React.ReactNode;
  clearIcon: React.ReactNode;
  //showLoading: boolean //ActivityIndicator
  onClear?: () => void;
  // leftIcon
  leftIconContainerStyle?: StyleProp<ViewProps>;
  // rightIcon
  rightIconContainerStyle?: StyleProp<ViewProps>;
}

export type TextInputEvent = NativeSyntheticEvent<TextInputFocusEventData>;
