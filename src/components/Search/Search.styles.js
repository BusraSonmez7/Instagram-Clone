import {StyleSheet} from 'react-native';
import {colors} from '../../color';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    backgroundColor: colors.border,
    paddingStart: 10,
    paddingEnd: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
