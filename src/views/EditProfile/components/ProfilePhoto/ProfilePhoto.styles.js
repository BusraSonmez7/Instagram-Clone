import {StyleSheet} from 'react-native';
import {colors} from '../../../../color';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  text: {
    color: colors.blue,
    fontSize: 16,
    marginTop: 10,
  },
});
