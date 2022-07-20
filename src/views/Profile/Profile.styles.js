import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../color';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'space-between',
  },
  userNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconLock: {
    color: colors.black,
    marginEnd: 5,
  },
  userNameTitle: {
    fontSize: 24,
    color: colors.black,
    fontWeight: 'bold',
  },
  iconArrowDown: {
    color: colors.black,
    marginStart: 5,
  },
  iconCircle: {
    color: colors.pink,
  },
  headerRightContainer: {
    flexDirection: 'row',
  },
  iconRightHeader: {
    color: colors.black,
    marginStart: 15,
  },
  profileImageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  contentContainer: {
    alignItems: 'center',
  },
  contentNumber: {
    fontWeight: 'bold',
    color: colors.black,
  },
  contentType: {
    color: colors.black,
  },
  name: {
    color: colors.black,
    fontWeight: 'bold',
    fontSize: 16,
    marginStart: 20,
    marginBottom: 10,
  },
  setStatusContainer: {
    width: 150,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.set_status,
    borderRadius: 15,
    marginStart: 20,
    padding: 7,
    justifyContent: 'center',
  },
  iconStatus: {
    color: colors.black,
    marginEnd: 7,
  },
  setStatus: {
    color: colors.black,
  },
  explanation: {
    color: colors.black,
    marginStart: 20,
    marginTop: 10,
  },
  editProfileContainer: {
    flexDirection: 'row',
    flex: 1,
    marginTop: 10,
  },
  editProfileButton: {
    flex: 4,
    backgroundColor: colors.border,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 7,
    marginStart: 20,
    marginEnd: 10,
    borderRadius: 7,
  },
  editProfileIcon: {
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginEnd: 10,
    backgroundColor: colors.edit_profile,
    borderRadius: 7,
  },
  editText: {
    color: colors.black,
    fontWeight: 'bold',
    fontSize: 17,
  },
  editIcon: {
    color: colors.black,
  },
  newPersonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
    marginEnd: 10,
  },
  newPersonText: {
    fontWeight: 'bold',
    color: colors.black,
  },
  newPersonButton: {},
  newPersonButtonText: {
    color: colors.blue,
    fontWeight: 'bold',
  },
  favoriteStoryContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    margin: 10,
    marginStart: 20,
  },
  favoriteStoryText: {
    fontWeight: 'bold',
    color: colors.black,
  },
  iconFavoriteStory: {
    color: colors.black,
  },
  circleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  circle: {
    width: WIDTH / 4 - 30,
    height: WIDTH / 4 - 30,
    borderRadius: 38,
    backgroundColor: colors.border,
    marginEnd: 10,
  },
  circleAdd: {
    width: WIDTH / 4 - 30,
    height: WIDTH / 4 - 30,
    borderRadius: 38,
    backgroundColor: colors.white,
    marginEnd: 10,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusIcon: {
    color: colors.black,
  },
  favoriteStoryDownText: {
    marginStart: 20,
    color: colors.black,
    marginBottom: 10,
  },
  addHistoryContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  addHistoryNewText: {
    color: colors.black,
  },
  topNavigatorContainer: {
    width: WIDTH,
    height: HEIGHT - 120,
  },
});
