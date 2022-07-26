import {StyleSheet} from 'react-native';
import {colors} from '../../../../color';

export default StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginBottom: 20,
    marginStart: 5,
  },
  headerIcon: {
    color: colors.black,
    marginEnd: 20,
  },
  headerText: {
    fontSize: 23,
    fontWeight: 'bold',
    color: colors.black,
  },
});
