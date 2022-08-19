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
  imageIcon: {
    height: 25,
    width: 25,
    marginEnd: 10,
    marginStart: 10,
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
