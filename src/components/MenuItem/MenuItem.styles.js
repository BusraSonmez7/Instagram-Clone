import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../color';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  icon: {
    marginLeft: 30,
    color: colors.black,
  },
  itemText: {
    color: colors.black,
    fontSize: 16,
  },
});
