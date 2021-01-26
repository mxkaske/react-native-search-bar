import React from 'react';
import { SearchBarContext } from '../contexts/searchbar';

export const useSearchBar = () => {
  const context = React.useContext(SearchBarContext);
  if (!context) {
    throw new Error(
      'Compound component has do live inside the SearchBarProvider'
    );
  }
  return context;
};
