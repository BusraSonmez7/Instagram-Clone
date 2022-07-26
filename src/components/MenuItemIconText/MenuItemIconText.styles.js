import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../color';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  icon: {},
  text: {
    flex: 1,
    marginStart: 10,
    fontSize: 16,
    marginEnd: 10,
  },
});
