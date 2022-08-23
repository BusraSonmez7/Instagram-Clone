import {StyleSheet} from 'react-native';
import {colors} from '../../../../color';

export default StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  headerText: {
    fontSize: 25,
    color: colors.black,
    fontWeight: 'bold',
  },
  headerIconContainer: {
    flexDirection: 'row',
  },
  headerIcon: {
    color: colors.black,
    marginStart: 20,
  },
  imageMenu: {
    width: 25,
    height: 28,
    marginEnd: 20,
  },
});
