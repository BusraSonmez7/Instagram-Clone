import {StyleSheet} from 'react-native';
import {colors} from '../../color';

export default StyleSheet.create({
  container: {},
  menuContainer: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 20,
  },
  icon: {
    color: colors.white,
    marginStart: 15,
  },
  writeMessage: {
    paddingStart: 10,
    paddingEnd: 10,
    borderBottomWidth: 0.5,
    borderColor: colors.circle_border,
  },
});
