import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../color';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    width: WIDTH / 2 - 30,
    marginStart: 10,
    margin: 15,
  },
  imageContainer: {
    width: WIDTH / 2 - 30,
    height: WIDTH / 2 - 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: colors.black,
    fontWeight: 'bold',
    fontSize: 16,
    marginStart: 5,
    marginTop: 10,
  },
  image: {
    width: WIDTH / 2 - 30,
    height: WIDTH / 2 - 30,
    borderRadius: 10,
  },
});
