import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {ButtonProps} from './types';

const Button = ({
  label,
  addMarginHorizontal,
  showAsBottomAbsolute,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        addMarginHorizontal && styles.marginHorizontal,
        showAsBottomAbsolute && styles.bottomAbsolute,
      ]}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
