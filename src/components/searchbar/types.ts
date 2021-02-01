import type {
  NativeSyntheticEvent,
  StyleProp,
  TextInput,
  TextInputFocusEventData,
  TextInputProps,
  TextStyle,
  ViewProps,
  ViewStyle,
} from 'react-native';

export interface SearchBarProps extends TextInputProps {
  ref: React.Ref<TextInput>;
  searchIcon: React.ReactNode;
  clearIcon: React.ReactNode;
  //showLoading: boolean //ActivityIndicator
  onClear?: () => void;
  // leftIcon
  leftIconContainerStyle?: StyleProp<ViewProps>;
  // rightIcon
  rightIconContainerStyle?: StyleProp<ViewProps>;
  clearTextOnCancel?: boolean;
  cancelButtonTextStyle?: StyleProp<TextStyle>;
  cancelButtonContainerStyle?: StyleProp<ViewStyle>;
  cancelText?: string;
  containerStyle?: StyleProp<ViewStyle>;
  inputContainerStyle?: StyleProp<ViewStyle>;
}

export type TextInputEvent = NativeSyntheticEvent<TextInputFocusEventData>;
