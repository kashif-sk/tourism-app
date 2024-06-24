import {Dimensions, StyleSheet} from 'react-native';
import {Colors, Spacing, textVariants} from '../../theme';
import {ButtonStyle} from './types';

const styles = StyleSheet.create<ButtonStyle>({
  container: {
    height: 40,
    backgroundColor: Colors.primary,
    borderRadius: Spacing.cardBorderRadius,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    ...textVariants.text16B,
    color: Colors.lightText,
  },
  marginHorizontal: {
    marginHorizontal: Spacing.m,
  },
  bottomAbsolute: {
    position: 'absolute',
    bottom: 16,
    width: Dimensions.get('window').width - Spacing.m * 2,
  },
});

export default styles;
