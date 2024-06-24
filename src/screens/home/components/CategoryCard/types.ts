import {ImageStyle, ViewStyle} from 'react-native';

export interface CategoryCardProps {
  name: string;
}

export type CategoryCardStyles = {
  container: ViewStyle;
  arrowIcon: ImageStyle;
};
