import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../color';

const WIDTH = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    marginStart: 15,
    flexDirection: 'row',
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
  textContainer: {},
  textTop: {
    maxWidth: WIDTH - 160,
    color: colors.black,
    fontSize: 14,
    marginStart: 20,
  },
  textBottom: {
    color: colors.text_gray,
    fontSize: 14,
    marginStart: 20,
    marginTop: 2,
  },
});
