import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../../../color';
const WIDTH = Dimensions.get('window').width;
export default StyleSheet.create({
  categoryListContainer: {},
  categoryScroll: {},
  categoryButtonContainer: {
    backgroundColor: colors.search,
    padding: 5,
    borderRadius: 5,
    paddingStart: 20,
    paddingEnd: 20,
  },
  categoryButtonText: {
    color: colors.black,
    fontWeight: 'bold',
  },
});
