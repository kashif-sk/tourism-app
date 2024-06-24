import React from 'react';
import {Image, ScrollView} from 'react-native';
import styles from './styles';
import images from '../../assets/images';
import HighlightContainer from './components/HighlightContainer';
import CategoryContainer from './components/CategoryContainer';

const Home = () => {
  return (
    <ScrollView style={styles.container}>
      <Image source={images.welcome} style={styles.image} />
      <HighlightContainer />
      <CategoryContainer />
    </ScrollView>
  );
};

export default Home;
