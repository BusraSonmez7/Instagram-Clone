import {StyleSheet} from 'react-native';
import {colors} from '../../../../color';

export default StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'space-between',
    marginStart: 10,
  },
  userNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconLock: {
    color: colors.black,
    marginEnd: 5,
  },
  headerRightContainer: {
    flexDirection: 'row',
  },
});
