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
    bottom: 20,
    right: 0,
    left: 0,
  },
  textContainer: {
    justifyContent: 'flex-end',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {},
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
    marginLeft: 15,
    marginTop: 10,
  },
  soundContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  soundAnimation: {
    height: 30,
    width: 30,
    marginLeft: 5,
  },
  musicName: {
    color: colors.white,
    marginLeft: 15,
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
    alignItems: 'center',
  },
  icon: {
    color: colors.white,
    marginTop: 15,
  },
  image: {
    width: 30,
    height: 30,
    borderColor: colors.white,
    borderRadius: 5,
    borderWidth: 3,
    marginTop: 10,
  },
  iconText: {
    color: colors.white,
    fontSize: 12,
  },
  volume: {
    width: 80,
    height: 80,
    top: HEIGHT / 2.4,
    left: WIDTH / 2.4,
    borderWidth: 1,
    borderRadius: 40,
    padding: 10,
    backgroundColor: 'white',
  },
});
