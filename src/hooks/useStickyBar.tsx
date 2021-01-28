import React from 'react';
import { StickyBarContext } from '../contexts/stickybar';

export const useStickyBar = () => {
  const context = React.useContext(StickyBarContext);
  if (!context) {
    throw new Error(
      'Compound component has do live inside the StickyBarProvider'
    );
  }
  return context;
};
