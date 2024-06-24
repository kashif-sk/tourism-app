import {StyleSheet} from 'react-native';
import {Colors, Spacing, textVariants} from '../../../../theme';
import {HighlightContainerStyle} from './types';

const styles = StyleSheet.create<HighlightContainerStyle>({
  container: {
    paddingHorizontal: Spacing.s,
    paddingTop: Spacing.xxl,
    backgroundColor: Colors.cardBg,
  },
  label: {
    ...textVariants.text16B,
    marginHorizontal: Spacing.m,
    marginBottom: Spacing.lg,
  },
});

export default styles;
