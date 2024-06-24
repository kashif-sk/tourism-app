import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import images from '../../../../assets/images';
import styles from './styles';
import {HighlightCardProps} from './types';

const HighlightCard = ({
  name,
  image,
  description,
  routeName,
}: HighlightCardProps) => {
  const navigation = useNavigation();

  const onPress = () => navigation.navigate(routeName);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
      </View>
      <View style={styles.bottomView}>
        <View>
          <Text style={styles.nameText}>{name}</Text>
          <Text style={styles.descriptionText}>{description}</Text>
        </View>
        <TouchableOpacity style={styles.arrowContainer} onPress={onPress}>
          <Image source={images.arrowRight} style={styles.arrowIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HighlightCard;
