import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import images from '../../../../assets/images';
import styles from './styles';
import {CategoryCardProps} from './types';

const CategoryCard = ({name}: CategoryCardProps) => {
  const onPress = () => {};

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text>{name}</Text>
      <Image source={images.arrowRight} style={styles.arrowIcon} />
    </TouchableOpacity>
  );
};

export default CategoryCard;
