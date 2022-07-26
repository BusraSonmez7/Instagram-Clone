import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../color';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {},
  menuContainer: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 20,
  },
  icon: {
    color: colors.white,
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
  writeMessage: {
    paddingStart: 10,
    paddingEnd: 10,
    borderBottomWidth: 0.5,
    borderColor: colors.circle_border,
  },
});
