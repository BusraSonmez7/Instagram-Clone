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
    marginLeft: 20,
    color: colors.black,
  },
  menu: {
    borderRadius: 5,
  },
  menuItem: {
    borderBottomWidth: 0.5,
    borderColor: colors.circle_border,
    padding: 10,
  },
});
