import {StyleSheet} from 'react-native';
import {colors} from '../../color';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  backdrop: {
    backgroundColor: colors.black,
    opacity: 0.5,
  },
});
