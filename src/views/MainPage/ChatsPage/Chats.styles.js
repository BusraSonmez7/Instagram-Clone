import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../../color';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: HEIGHT - 60,
  },
  headerContainer: {
    flexDirection: 'row',
    margin: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerBackContainer: {
    flexDirection: 'row',
  },
  iconHeader: {
    color: colors.black,
    marginEnd: 20,
  },
  headerText: {},
  iconHeaderContainer: {
    flexDirection: 'row',
  },
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
