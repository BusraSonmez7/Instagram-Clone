import {StyleSheet, Dimensions} from 'react-native';

const WIDTH = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginEnd: 10,
  },
  list: {
    width: ((WIDTH - 8) / 3) * 2,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  list_six: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  list_right: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  list_left: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: (WIDTH - 15) / 3,
    height: (WIDTH - 15) / 3,
    marginEnd: 2,
    marginTop: 2,
  },
  image_two: {
    width: (WIDTH - 15) / 3,
    height: ((WIDTH - 15) / 3) * 2,
    marginEnd: 2,
    marginTop: 2,
  },
});
