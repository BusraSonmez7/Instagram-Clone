import {StyleSheet} from 'react-native';
import {colors} from '../../color';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  userNameContainer: {
    flex: 1,
    marginStart: 20,
  },
  userName: {
    color: colors.black,
    fontWeight: 'bold',
  },
  messageContainer: {
    flexDirection: 'row',
  },
  endMessage: {
    marginEnd: 5,
  },
  circle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    color: colors.white,
  },
});
