import {StyleSheet} from 'react-native';
import {Spacing, textVariants} from '../../../../theme';
import {CategoryContainerStyle} from './types';

const styles = StyleSheet.create<CategoryContainerStyle>({
  container: {
    marginVertical: Spacing.xxl,
    marginHorizontal: Spacing.m,
  },
  label: {
    ...textVariants.text16B,
    marginBottom: Spacing.s,
  },
});

export default styles;
