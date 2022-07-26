import {StyleSheet} from 'react-native';
import {colors} from '../../../../../color';

export default StyleSheet.create({
  messagesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  messagesText: {
    color: colors.black,
    fontSize: 17,
    fontWeight: 'bold',
  },
  requestsButton: {
    color: colors.blue,
    fontSize: 17,
  },
});
