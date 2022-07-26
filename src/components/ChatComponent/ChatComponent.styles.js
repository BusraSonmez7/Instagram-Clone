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
  },
  messageContainer: {
    flexDirection: 'row',
  },
  endMessage: {
    marginEnd: 5,
  },
  point: {
    alignSelf: 'center',
    marginEnd: 5,
  },
});
