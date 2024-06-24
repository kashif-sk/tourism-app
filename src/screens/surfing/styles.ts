import {StyleSheet} from 'react-native';
import {SurfingStyles} from './types';
import {Colors, Spacing, textVariants} from '../../theme';

const styles = StyleSheet.create<SurfingStyles>({
  container: {
    backgroundColor: Colors.pageBg,
  },
  image: {
    width: '100%',
    maxHeight: '70%',
  },
  descriptionContainer: {
    backgroundColor: Colors.cardBg,
    paddingHorizontal: Spacing.m,
    paddingVertical: Spacing.xxl,
    marginBottom: Spacing.xxl,
  },
  descriptionText: {
    ...textVariants.text16R,
  },
});

export default styles;
