import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../color';

const WIDTH = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    width: 2 * ((WIDTH - 4) / 3) + 4,
    height: 2 * ((WIDTH - 4) / 3) + 4,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  listBottom: {
    width: 2 * ((WIDTH - 4) / 3) + 2,
    height: 2 * ((WIDTH - 4) / 3) + 4,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  list_six: {
    width: 3 * ((WIDTH - 4) / 3) + 4,
    height: 2 * ((WIDTH - 4) / 3) + 4,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  list_right: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  list_left: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    width: (WIDTH - 4) / 3,
    height: (WIDTH - 4) / 3,
    marginEnd: 2,
    marginBottom: 2,
  },
  image_two: {
    width: (WIDTH - 4) / 3,
    height: 2 * ((WIDTH - 4) / 3) + 2,
  },
  icon: {
    position: 'absolute',
    color: colors.white,
    right: 5,
    top: 5,
  },
});
