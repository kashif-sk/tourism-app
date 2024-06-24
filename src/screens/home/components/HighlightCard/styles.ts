import {Dimensions, StyleSheet} from 'react-native';
import {Colors, Spacing, textVariants} from '../../../../theme';
import {HighlightCardStyle} from './types';

const styles = StyleSheet.create<HighlightCardStyle>({
  container: {
    backgroundColor: Colors.cardBg,
    marginHorizontal: Spacing.s,
    width: Dimensions.get('window').width * 0.75,
    flex: 1,
    borderRadius: Spacing.cardBorderRadius,
    marginBottom: Spacing.xxl,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  imageContainer: {
    borderTopLeftRadius: Spacing.cardBorderRadius,
    borderTopRightRadius: Spacing.cardBorderRadius,
    overflow: 'hidden',
  },
  image: {
    height: 170,
  },
  bottomView: {
    flex: 1,
    justifyContent: 'space-between',
    padding: Spacing.lg,
  },
  nameText: {
    ...textVariants.text24B,
    marginBottom: Spacing.m,
    color: Colors.primary,
  },
  descriptionText: {
    ...textVariants.text16R,
  },
  arrowContainer: {
    height: 40,
    width: 40,
    borderRadius: 40,
    backgroundColor: Colors.pageBg,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  arrowIcon: {
    transform: [{scale: 0.5}],
  },
});

export default styles;
