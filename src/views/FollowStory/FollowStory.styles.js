import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../color';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  image: {
    width: WIDTH,
    height: HEIGHT,
  },
  storyView: {
    position: 'absolute',
  },
  topTitleContainer: {
    width: WIDTH,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  userNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginStart: 10,
  },
  userName: {
    fontSize: 16,
    color: colors.white,
    fontWeight: 'bold',
    marginStart: 10,
  },
  time: {
    marginStart: 10,
    fontSize: 16,
    color: colors.circle_border,
  },
  menuIcon: {
    color: colors.white,
    marginEnd: 10,
  },
  clickContainer: {
    position: 'absolute',
    flexDirection: 'row',
    bottom: 50,
    top: 55,
  },
  leftClick: {
    width: WIDTH / 2,
    height: HEIGHT - 150,
  },
  rightClick: {
    width: WIDTH / 2,
    height: -150,
  },
  messageContainer: {
    width: WIDTH,
    position: 'absolute',
    bottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  messageSend: {
    flex: 1,
    color: colors.white,
    marginEnd: 10,
    marginStart: 10,
  },
  messageButton: {
    flex: 1,
    padding: 15,
    borderWidth: 1,
    borderColor: colors.white,
    borderRadius: 25,
  },
  sendIconContainer: {
    flexDirection: 'row',
    marginEnd: 10,
    marginStart: 10,
  },
  sendIcon: {
    color: colors.white,
    marginEnd: 10,
  },
  sendMessageText: {
    color: colors.white,
  },
  progressBar: {
    margin: 5,
    marginTop: 10,
  },
});
