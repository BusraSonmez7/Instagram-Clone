import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../color';

const WIDTH = Dimensions.get('window').width;

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
    marginStart: 10,
  },
  create: {
    alignItems: 'center',
  },
  createText: {
    width: WIDTH,
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.black,
    borderBottomColor: colors.circle_border,
    borderBottomWidth: 1,
    textAlign: 'center',
  },
  imageIcon: {
    height: 25,
    width: 25,
    marginEnd: 10,
    marginStart: 10,
  },
});
