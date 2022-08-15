import {StyleSheet} from 'react-native';
import {colors} from '../../../../color';

export default StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'space-between',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconClose: {
    color: colors.black,
    marginStart: 5,
  },
  iconTick: {
    color: colors.blue,
    marginEnd: 5,
  },
  title: {
    color: colors.black,
    fontWeight: 'bold',
    fontSize: 18,
    marginStart: 20,
    marginEnd: 20,
  },
});
