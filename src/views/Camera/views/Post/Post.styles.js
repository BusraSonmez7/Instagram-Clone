import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../../../color';

const WIDTH = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
  },
  headerContainer: {
    backgroundColor: colors.white,
    width: WIDTH,
    padding: 10,
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    color: colors.black,
    fontWeight: 'bold',
  },
});
