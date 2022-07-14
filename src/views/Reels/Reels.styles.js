import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../color';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  topContainer: {
    width: WIDTH,
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    zIndex: 1,
  },
  reelsText: {
    color: colors.white,
    fontSize: 25,
    fontWeight: 'bold',
    marginStart: 10,
    marginTop: 10,
  },
  cameraIcon: {
    color: colors.white,
    marginRight: 10,
    marginTop: 10,
  },
});
