import {StyleSheet} from 'react-native';
import {colors} from '../../color';

export default StyleSheet.create({
  container: {},
  menuContainer: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
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
    borderBottomWidth: 1,
    borderBottomColor: colors.circle_border,
    paddingBottom: 10,
  },
  create: {
    margin: 10,
    marginTop: 10,
  },
  createText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.black,
  },
  itemText: {
    fontSize: 16,
    color: colors.black,
  },
});
