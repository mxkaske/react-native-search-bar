import React from 'react';
import type Animated from 'react-native-reanimated';

export type SearchBarContextType = {
  focus: Animated.SharedValue<boolean>;
  empty: Animated.SharedValue<boolean>;
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
};

// @ts-ignore
export const SearchBarContext = React.createContext<SearchBarContextType>();

export const SearchBarProvider = SearchBarContext.Provider;
