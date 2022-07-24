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
    marginLeft: 20,
    color: colors.black,
  },
  menu: {
    borderRadius: 5,
  },
  item: {
    flexDirection: 'row',
    padding: 5,
    justifyContent: 'center',
  },
  itemText: {
    color: colors.black,
    fontSize: 16,
  },
  menuItem: {
    borderBottomWidth: 0.5,
    borderColor: colors.circle_border,
    padding: 10,
  },
});
