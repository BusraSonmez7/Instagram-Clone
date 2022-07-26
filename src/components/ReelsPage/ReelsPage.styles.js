import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../color';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    width: WIDTH,
    height: HEIGHT - 73,
  },
  video: {
    height: HEIGHT - 73,
    width: WIDTH,
    position: 'absolute',
    zIndex: -1,
  },
  activityContainer: {
    marginLeft: 10,
    marginRight: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 10,
    right: 0,
    left: 0,
  },
  textContainer: {
    justifyContent: 'flex-end',
    marginRight: 40,
    left: 0,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userName: {
    fontWeight: 'bold',
    color: colors.white,
    marginLeft: 15,
  },
  followButton: {
    borderWidth: 2,
    borderRadius: 5,
    borderColor: colors.white,
    color: colors.white,
    marginLeft: 15,
    padding: 3,
    paddingLeft: 10,
    paddingRight: 10,
    fontWeight: 'bold',
  },
  comment: {
    color: colors.white,
    marginLeft: 10,
    marginTop: 10,
    fontSize: 14,
  },
  soundContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  soundAnimation: {
    height: 50,
    width: 50,
  },
  musicName: {
    color: colors.white,
    marginLeft: 10,
  },
  soundCircle: {
    color: colors.white,
    marginLeft: 10,
  },
  soundType: {
    color: colors.white,
    marginLeft: 10,
  },
  iconContainer: {
    height: HEIGHT / 2,
    alignItems: 'center',
    right: 10,
    justifyContent: 'space-evenly',
  },
  icon: {
    color: colors.white,
    marginTop: 15,
  },
  image: {
    width: WIDTH / 8,
    height: WIDTH / 8,
    borderColor: colors.white,
    borderRadius: 5,
    borderWidth: 3,
    marginTop: 10,
  },
  iconText: {
    color: colors.white,
    fontSize: 12,
  },
  backdrop: {
    backgroundColor: colors.black,
    opacity: 0.5,
  },
});
