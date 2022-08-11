import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../color';

const WIDTH = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.disabled_blue,
  },
  savedContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
