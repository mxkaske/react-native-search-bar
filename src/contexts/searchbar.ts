import React from 'react';

export type SearchBarContextType = {
  isFocused: boolean;
};

export const SearchBarContext = React.createContext<SearchBarContextType>({
  isFocused: false,
});

export const SearchBarProvider = SearchBarContext.Provider;
