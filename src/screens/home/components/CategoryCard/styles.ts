import {StyleSheet} from 'react-native';
import {Colors, Spacing} from '../../../../theme';
import {CategoryCardStyles} from './types';

const styles = StyleSheet.create<CategoryCardStyles>({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: Spacing.lg,
    backgroundColor: Colors.cardBg,
    marginTop: Spacing.s,
    borderRadius: Spacing.cardBorderRadius,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  arrowIcon: {
    transform: [{scale: 0.5}],
  },
});

export default styles;
