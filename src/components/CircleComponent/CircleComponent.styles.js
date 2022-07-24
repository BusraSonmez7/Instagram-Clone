import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../color';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    borderWidth: 1,
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.circle_border,
  },

  icon: {
    color: colors.black,
  },
  text: {
    color: colors.black,
    fontSize: 12,
    marginTop: 7,
    fontWeight: 'bold',
  },
});
