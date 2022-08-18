import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../../color';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    justifyContent: 'space-between',
    bottom: 75,
    top: 0,
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
  bottomTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    marginTop: 10,
  },
  carouselContainer: {
    marginEnd: 15,
    marginStart: 15,
  },
  image: {
    width: 30,
    height: 30,
    borderColor: colors.white,
    borderRadius: 5,
    borderWidth: 3,
    marginStart: 10,
  },
  cameraIcon: {
    color: colors.white,
    marginEnd: 10,
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  typeText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: 'bold',
  },
});
