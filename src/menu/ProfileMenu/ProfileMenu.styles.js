import {StyleSheet} from 'react-native';
import {colors} from '../../color';

export default StyleSheet.create({
  container: {},
  menuContainer: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  icon: {
    color: colors.black,
    marginStart: 15,
  },
  item: {
    alignItems: 'center',
    flexDirection: 'row',
    marginStart: 10,
  },
});
