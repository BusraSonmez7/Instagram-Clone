import {StyleSheet, Dimensions} from 'react-native';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({
  qrScanner: {
    height: HEIGHT,
    flex: 1,
  },
  scannerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  linearGradient: {
    flex: 1,
    height: WIDTH,
    width: WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.5,
  },
});
