import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../color';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconLock: {
    color: colors.black,
    marginEnd: 5,
  },
  userNameTitle: {
    fontSize: 24,
    color: colors.black,
    fontWeight: 'bold',
  },
  iconArrowDown: {
    color: colors.black,
    marginStart: 5,
  },
  iconCircle: {
    color: colors.pink,
  },
});
