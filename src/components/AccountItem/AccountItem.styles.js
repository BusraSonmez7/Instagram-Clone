import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../color';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

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
