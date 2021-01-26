import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import type { StickyBarProps } from './types';

const StickyBar = ({}: StickyBarProps) => {
  return (
    <View style={styles.container}>
      {[0, 0, 0, 0].map((_, idx) => (
        <TouchableOpacity key={idx}>
          <View style={styles.dot} />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default StickyBar;
