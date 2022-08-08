import {StyleSheet} from 'react-native';
import {colors} from '../../../../color';

export default StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'space-between',
  },
  userNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  username: {
    color: colors.black,
    fontWeight: 'bold',
    fontSize: 20,
    marginStart: 20,
  },
  iconLock: {
    color: colors.black,
    marginEnd: 5,
  },
  headerRightContainer: {
    flexDirection: 'row',
  },
});
