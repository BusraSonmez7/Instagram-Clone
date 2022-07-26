import {StyleSheet} from 'react-native';
import {colors} from '../../../../color';

export default StyleSheet.create({
  categoryListContainer: {},
  categoryScroll: {},
  categoryButtonContainer: {
    backgroundColor: colors.border,
    padding: 5,
    marginEnd: 10,
    marginStart: 10,
    borderRadius: 5,
    paddingStart: 20,
    paddingEnd: 20,
  },
  categoryButtonText: {
    color: colors.black,
    fontWeight: 'bold',
  },
});
