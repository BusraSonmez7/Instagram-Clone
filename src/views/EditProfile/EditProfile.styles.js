import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../color';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  buttonsContainer: {
    borderTopWidth: 0.5,
    borderColor: colors.circle_border,
    paddingBottom: 30,
  },
});
