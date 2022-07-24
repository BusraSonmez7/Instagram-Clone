import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../color';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {},
  menuContainer: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingBottom: 50,
  },
  icon: {
    color: colors.black,
    marginStart: 15,
  },
  item: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 10,
    marginStart: 10,
    borderBottomWidth: 0.5,
    borderColor: colors.circle_border,
  },
});
