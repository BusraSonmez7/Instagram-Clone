import {StyleSheet} from 'react-native';
import {colors} from '../../../../color';

export default StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    paddingStart: 15,
    paddingEnd: 15,
    justifyContent: 'space-between',
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
  imageIcon: {
    height: 18,
    width: 15,
    marginEnd: 5,
  },
});
