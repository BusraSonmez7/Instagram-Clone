import {StyleSheet} from 'react-native';
import {colors} from '../../color';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    marginStart: 15,
    flexDirection: 'row',
    marginTop: 20,
  },
  textContainer: {},
  textTop: {
    color: colors.black,
    fontSize: 14,
    fontWeight: 'bold',
    marginStart: 20,
  },
  textBottom: {
    color: colors.blue,
    fontSize: 14,
    marginStart: 20,
    marginTop: 2,
    fontWeight: 'bold',
  },
  image: {
    height: 60,
    width: 60,
  },
});
