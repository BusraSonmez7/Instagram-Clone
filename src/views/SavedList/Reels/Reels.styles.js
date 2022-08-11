import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../../color';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 2,
    backgroundColor: colors.white,
  },
  imageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  image: {
    width: WIDTH / 3 - 1,
    height: (WIDTH / 3) * 2,
    marginBottom: 1,
    marginEnd: 1,
  },
  iconContainer: {
    position: 'absolute',
    left: 10,
    bottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    color: colors.white,
  },
  text: {
    color: colors.white,
    marginStart: 5,
    fontSize: 12,
  },
});
