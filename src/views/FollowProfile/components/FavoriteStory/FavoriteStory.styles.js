import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../../../color';
const WIDTH = Dimensions.get('window').width;

export default StyleSheet.create({
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
  favoriteStoryDownText: {
    marginStart: 20,
    color: colors.black,
    marginBottom: 10,
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
  addHistoryContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  addHistoryNewText: {
    color: colors.black,
  },
  favoriteStory: {
    alignItems: 'center',
  },
  favoriteStoryText: {
    color: colors.black,
  },
});
