import React from 'react';
import type Animated from 'react-native-reanimated';

export type StickyBarContextType = {
  focus: Animated.SharedValue<boolean>;
  close: Animated.SharedValue<boolean>;
};

// @ts-ignore
export const StickyBarContext = React.createContext<StickyBarContextType>();

export const StickyBarProvider = StickyBarContext.Provider;
