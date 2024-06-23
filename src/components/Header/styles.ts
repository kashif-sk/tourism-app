import {StyleSheet} from 'react-native';
import {HeaderStyle} from './types';
import {Colors, Spacing} from '../../theme';

const styles = StyleSheet.create<HeaderStyle>({
  container: {
    flex: 1,
    backgroundColor: Colors.headerBg,
    alignItems: 'center',
    paddingVertical: Spacing.l,
  },
  image: {
    height: 35,
    width: 94,
    resizeMode: 'contain',
  },
});

export default styles;
