import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import type { StickyBarProps } from './types';

const StickyBar = ({}: StickyBarProps) => {
  return (
    <View style={styles.container}>
      {[0, 0, 0, 0].map(() => (
        <View style={styles.dot} />
      ))}
    </View>
  );
};

export default StickyBar;
