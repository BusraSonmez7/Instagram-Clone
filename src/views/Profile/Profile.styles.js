import {StyleSheet} from 'react-native';
import {colors} from '../../color';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
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
  iconLock: {
    color: colors.black,
    marginEnd: 5,
  },
  userNameTitle: {
    fontSize: 24,
    color: colors.black,
    fontWeight: 'bold',
  },
  iconArrowDown: {
    color: colors.black,
    marginStart: 5,
  },
  iconCircle: {
    color: colors.pink,
  },
  headerRightContainer: {
    flexDirection: 'row',
  },
  iconRightHeader: {
    color: colors.black,
    marginStart: 15,
  },
  profileImageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  contentContainer: {
    alignItems: 'center',
  },
  contentNumber: {
    fontWeight: 'bold',
    color: colors.black,
  },
  contentType: {},
});
