import {StyleSheet} from 'react-native';
import {colors} from '../../color';

export default StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    marginLeft: 30,
    color: colors.black,
  },
  itemText: {
    color: colors.black,
    fontSize: 16,
  },
});
