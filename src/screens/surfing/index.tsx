import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import styles from './styles';
import Button from '../../components/Button';
import images from '../../assets/images';
import GuideCard from '../../components/GuideCard';

const Surfing = () => {
  return (
    <>
      <ScrollView style={styles.container}>
        <Image source={images.surfingLogo} style={styles.image} />
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionText}>
            Hawaii is the capital of modern surfing. This group of Pacific
            islands gets swell from all directions, so there are plenty of
            pristine surf spots for all.
          </Text>
        </View>
        <GuideCard />
      </ScrollView>
      <Button label="Book a trip" addMarginHorizontal showAsBottomAbsolute />
    </>
  );
};

export default Surfing;
