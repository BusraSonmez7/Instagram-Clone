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
    padding: 10,
  },
  circle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.border,
    marginEnd: 10,
  },
  circleAdd: {
    width: 80,
    height: 80,
    borderRadius: 40,
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
});
