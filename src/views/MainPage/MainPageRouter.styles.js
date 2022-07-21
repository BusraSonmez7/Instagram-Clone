import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../color';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  topNavigatorContainer: {
    width: WIDTH,
    height: HEIGHT,
  },
});
