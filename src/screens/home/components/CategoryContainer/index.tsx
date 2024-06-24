import React from 'react';
import {Text, View} from 'react-native';
import CategoryCard from '../CategoryCard';
import styles from './styles';

const CategoryContainer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Categories</Text>
      {CategoryData.map(item => (
        <CategoryCard key={item.name} name={item.name} />
      ))}
    </View>
  );
};

export default CategoryContainer;

const CategoryData = [
  {name: 'Adventure'},
  {name: 'Culinary'},
  {name: 'Eco-tourism'},
  {name: 'Family'},
  {name: 'Sport'},
];
