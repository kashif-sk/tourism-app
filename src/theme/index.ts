import {TextStyle} from 'react-native';

export const Colors = {
  headerBg: '#fff',
  pageBg: '#E6F2F2',
  cardBg: '#fff',
  primary: '#008080',
  darkText: '#001A1A',
  lightText: '#fff',
};

export const Spacing = {
  s: 8,
  m: 16,
  l: 22,
  lg: 24,
  xxl: 40,
  cardBorderRadius: 8,
};

export const Fonts = {
  regular: 'System', //Actual font family to be added here
  bold: 'System', //Actual font family to be added here
};

type TextVariant = {[key: string]: TextStyle};

export const textVariants: TextVariant = {
  text16R: {
    fontFamily: Fonts.regular,
    fontSize: 16,
    fontWeight: '400',
    color: Colors.darkText,
  },
  text16B: {
    fontFamily: Fonts.bold,
    fontSize: 16,
    fontWeight: '700',
    color: Colors.darkText,
  },
  text24B: {
    fontFamily: Fonts.bold,
    fontSize: 24,
    fontWeight: '700',
    color: Colors.darkText,
  },
};
