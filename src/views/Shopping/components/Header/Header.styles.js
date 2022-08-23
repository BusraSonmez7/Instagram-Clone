import {StyleSheet} from 'react-native';
import {colors} from '../../../../color';

export default StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    paddingStart: 15,
    paddingEnd: 15,
    alignItems: 'center',
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
    width: 22,
    height: 25,
    marginEnd: 15,
  },
});
