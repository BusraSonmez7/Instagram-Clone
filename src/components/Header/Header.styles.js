import {StyleSheet} from 'react-native';
import {colors} from '../../color';

export default StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: colors.white,
  },
  headerIcon: {
    color: colors.black,
    marginEnd: 10,
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.black,
    marginStart: 10,
  },
});
