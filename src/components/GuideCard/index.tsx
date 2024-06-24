import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Colors, Spacing, textVariants} from '../../theme';
import images from '../../assets/images';

const GuideCard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Travel Guide</Text>
      <View style={styles.card}>
        <View style={styles.topView}>
          <View>
            <Text style={styles.nameText}>Hadwin Malone</Text>
            <Text style={styles.dateText}>Guide since 2012</Text>
          </View>
          <Image source={images.guide} style={styles.image} />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Contact</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GuideCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {...textVariants.text16B, marginHorizontal: Spacing.m},
  card: {
    margin: Spacing.m,
    backgroundColor: Colors.cardBg,
    padding: Spacing.lg,
    borderRadius: Spacing.cardBorderRadius,
    height: 176,
    justifyContent: 'space-between',
  },
  topView: {flexDirection: 'row', justifyContent: 'space-between'},
  nameText: {...textVariants.text24B, marginBottom: Spacing.m},
  dateText: {...textVariants.text16R},
  button: {
    height: 40,
    borderWidth: 1,
    borderRadius: Spacing.cardBorderRadius,
    borderColor: Colors.primary,
    alignSelf: 'flex-start',
    paddingHorizontal: Spacing.lg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {...textVariants.text16B, color: Colors.primary},
  image: {height: 74, width: 74},
});
