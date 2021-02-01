import React from 'react';
import { useSharedValue } from 'react-native-reanimated';
import { SearchBarProvider } from '../../contexts';
import type { SearchBarWrapperProps } from './types';

const SearchBarWrapper = ({ children }: SearchBarWrapperProps) => {
  const focus = useSharedValue(false);
  const empty = useSharedValue(true);
  const [text, setText] = React.useState('');
  return (
    <SearchBarProvider value={{ focus, empty, text, setText }}>
      {children}
    </SearchBarProvider>
  );
};

export default SearchBarWrapper;
