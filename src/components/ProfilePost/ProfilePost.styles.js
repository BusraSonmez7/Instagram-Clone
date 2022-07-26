import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../color';

const WIDTH = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sharesImage: {
    width: WIDTH / 3 - 1.4,
    height: WIDTH / 3 - 1.4,
    marginEnd: 2,
    marginBottom: 2,
  },
  shareList: {
    marginTop: 2,
  },
  shareIcon: {
    position: 'absolute',
    color: colors.white,
    right: 0,
    marginEnd: 5,
    marginTop: 5,
  },
});
