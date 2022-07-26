import {StyleSheet} from 'react-native';
import {colors} from '../../color';

export default StyleSheet.create({
  container: {},
  headerTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    color: colors.black,
  },
  icon: {
    color: colors.black,
  },
  menu: {
    borderRadius: 5,
  },
  itemBorder: {
    borderBottomWidth: 0.5,
  },
});
