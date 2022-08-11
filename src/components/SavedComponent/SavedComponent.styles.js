import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../color';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    margin: 10,
    marginEnd: 15,
    marginStart: 15,
    borderRadius: 10,
  },
  imageContainer: {
    width: WIDTH / 2 - 30,
    height: WIDTH / 2 - 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },
  icon: {
    color: colors.black,
  },
  title: {
    color: colors.black,
    fontWeight: 'bold',
    fontSize: 16,
    marginStart: 5,
  },
  image: {
    width: (WIDTH / 2 - 33) / 2,
    height: (WIDTH / 2 - 30) / 2,
  },
});
