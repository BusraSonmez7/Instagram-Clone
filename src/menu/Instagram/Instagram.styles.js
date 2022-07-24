import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../color';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {},
  headerTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    color: colors.black,
  },
  icon: {
    color: colors.black,
  },
  menu: {
    borderRadius: 5,
  },
  itemBorder: {
    borderBottomWidth: 0.5,
  },
});
