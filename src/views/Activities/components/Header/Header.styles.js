import {StyleSheet} from 'react-native';
import {colors} from '../../../../color';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
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
  sendIcon: {
    color: colors.black,
  },
});
