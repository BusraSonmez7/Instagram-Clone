import {StyleSheet} from 'react-native';
import {colors} from '../../color';

export default StyleSheet.create({
  container: {},
  menuContainer: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 10,
    paddingBottom: 20,
  },
  icon: {
    color: colors.black,
    marginStart: 15,
  },
  item: {
    alignItems: 'center',
    flexDirection: 'row',
    marginStart: 10,
    marginTop: 10,
  },
  itemText: {
    color: colors.black,
    fontSize: 16,
  },
});
