import type { TextInputProps } from 'react-native';

export interface SearchBarProps extends TextInputProps {
  searchIcon: React.ReactNode;
  clearIcon: React.ReactNode;
  //showLoading: boolean //ActivityIndicator
  onClear?: () => void;
}
