import React from 'react';
import {Image, ScrollView} from 'react-native';
import styles from './styles';
import images from '../../assets/images';
import HighlightContainer from './components/HighlightContainer';
import CategoryContainer from './components/CategoryContainer';
import Button from '../../components/Button';
import GuideCard from '../../components/GuideCard';

const Home = () => {
  return (
    <>
      <ScrollView style={styles.container}>
        <Image source={images.welcome} style={styles.image} />
        <HighlightContainer />
        <CategoryContainer />
        <GuideCard />
      </ScrollView>
      <Button label="Book a trip" addMarginHorizontal showAsBottomAbsolute />
    </>
  );
};

export default Home;
