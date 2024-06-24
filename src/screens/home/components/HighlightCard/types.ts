import {ImageStyle, TextStyle, ViewStyle} from 'react-native';
import {TabNavigator} from '../../../../navigators/types';

export interface HighlightCardProps {
  name: string;
  image: any;
  description: string;
  routeName: keyof TabNavigator;
}

export interface HighlightCardStyle {
  container: ViewStyle;
  imageContainer: ViewStyle;
  image: ImageStyle;
  bottomView: ViewStyle;
  nameText: TextStyle;
  descriptionText: TextStyle;
  arrowContainer: ViewStyle;
  arrowIcon: ImageStyle;
}
