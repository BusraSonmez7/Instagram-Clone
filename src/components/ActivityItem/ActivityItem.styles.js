import {StyleSheet} from 'react-native';
import {colors} from '../../color';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomColor: colors.border,
    borderBottomWidth: 1,
  },
  itemContainer: {
    flex: 1,
    marginStart: 30,
    marginEnd: 30,
  },
  icon: {
    color: colors.black,
  },
  nextIcon: {
    marginEnd: 10,
  },
  title: {
    color: colors.black,
    fontSize: 16,
  },
});
