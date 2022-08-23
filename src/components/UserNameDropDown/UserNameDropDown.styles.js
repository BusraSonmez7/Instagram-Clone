import {StyleSheet} from 'react-native';
import {colors} from '../../color';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userNameTitle: {
    fontSize: 24,
    color: colors.black,
    fontWeight: 'bold',
  },
  iconArrowDown: {
    color: colors.black,
  },
  iconCircle: {
    color: colors.pink,
  },
  imageIcon: {
    height: 12,
    width: 12,
    marginStart: 5,
  },
});
