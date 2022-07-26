import {StyleSheet} from 'react-native';
import {colors} from '../../../../../color';

export default StyleSheet.create({
  header: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
    borderBottomColor: colors.border,
    borderBottomWidth: 1,
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerIcon: {
    marginLeft: 10,
    color: colors.black,
  },
});
