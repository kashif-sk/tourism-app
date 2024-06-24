import {StyleSheet} from 'react-native';
import {HomeStyles} from './types';
import {Colors} from '../../theme';

const styles = StyleSheet.create<HomeStyles>({
  container: {
    flex: 1,
    backgroundColor: Colors.pageBg,
  },
  image: {
    width: '100%',
    maxHeight: '70%',
  },
});

export default styles;
