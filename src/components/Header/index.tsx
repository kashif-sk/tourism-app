import React from 'react';
import {Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import images from '../../assets/images';
import styles from './styles';

const Header = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={images.aloha} style={styles.image} />
    </SafeAreaView>
  );
};

export default Header;
