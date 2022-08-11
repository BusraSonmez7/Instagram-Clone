import {StyleSheet} from 'react-native';
import {colors} from '../../../../color';

export default StyleSheet.create({
  newPersonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
    marginEnd: 10,
  },
  newPersonText: {
    fontWeight: 'bold',
    color: colors.black,
  },
  newPersonButtonText: {
    color: colors.blue,
    fontWeight: 'bold',
  },
  flatList: {
    marginStart: 10,
  },
});
