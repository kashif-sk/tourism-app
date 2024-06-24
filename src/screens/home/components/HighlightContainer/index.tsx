import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import images from '../../../../assets/images';
import HighlightCard from '../HighlightCard';
import styles from './styles';

const HighlightContainer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Highlights</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {HighlightData.map(item => (
          <HighlightCard
            key={item.name}
            name={item.name}
            image={item.image}
            description={item.description}
            routeName={item.routeName}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default HighlightContainer;

const HighlightData = [
  {
    name: 'Surfing',
    image: images.surfing,
    description: 'Best Hawaiian islands for surfing.',
    routeName: 'Surfing',
  },
  {
    name: 'Hula',
    image: images.hula,
    description: 'Try it yourself.',
    routeName: 'Hula',
  },
  {
    name: 'Vulcanoes',
    image: images.vulcanoes,
    description: 'Volcanic conditions can change at any time.',
    routeName: 'Volcano',
  },
] as const;
