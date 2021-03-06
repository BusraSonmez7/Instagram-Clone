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
  endMessage: {
    marginEnd: 5,
  },
  send: {
    backgroundColor: colors.blue,
    alignItems: 'center',
    padding: 7,
    paddingStart: 15,
    paddingEnd: 15,
    borderRadius: 5,
    marginTop: 10,
  },
  sendText: {
    color: colors.white,
    fontWeight: 'bold',
  },
  information: {
    fontSize: 12,
    marginTop: 2,
  },
});
