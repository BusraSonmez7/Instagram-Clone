import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../../../../color';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({
  leftText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.white,
  },
  leftIcon: {
    color: colors.white,
    marginTop: 15,
  },
  bottomIcons: {
    marginStart: 10,
  },
});
