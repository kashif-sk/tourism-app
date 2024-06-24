import {TextStyle, ViewStyle} from 'react-native';

export interface ButtonProps {
  label: string;
  addMarginHorizontal?: boolean;
  showAsBottomAbsolute?: boolean;
}

export type ButtonStyle = {
  container: ViewStyle;
  label: TextStyle;
  marginHorizontal: ViewStyle;
  bottomAbsolute: ViewStyle;
};
