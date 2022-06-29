import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../color';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
  },
  profileImage: {
    position: 'absolute',
    bottom: 50,
  },
  video: {
    height: HEIGHT,
    width: WIDTH,
    position: 'absolute',
    zIndex: -1,
  },
});
