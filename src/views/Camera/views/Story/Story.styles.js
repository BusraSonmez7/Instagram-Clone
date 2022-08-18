import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../../../color';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    height: HEIGHT,
    position: 'absolute',
    justifyContent: 'space-between',
  },
  headerContainer: {
    width: WIDTH,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  headerIcon: {
    color: colors.white,
  },
  bottomContainer: {},
  leftText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.white,
  },
  leftIcon: {
    color: colors.white,
    marginTop: 15,
  },
  bottomIcons: {
    marginStart: 10,
  },
  photoContainer: {
    alignItems: 'center',
    padding: 10,
  },
  circleContainer: {
    width: 75,
    height: 75,
    borderRadius: 50,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.black,
  },
});
