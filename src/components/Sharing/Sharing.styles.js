import {StyleSheet} from 'react-native';
import {colors} from '../../color';

export default StyleSheet.create({
  container: {},
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    marginStart: 10,
    color: colors.black,
  },
  icon: {
    color: colors.black,
    marginEnd: 10,
    marginStart: 10,
  },
  image: {},
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  iconsContainerStart: {
    flexDirection: 'row',
  },
  likeContainer: {
    flexDirection: 'row',
  },
  likeBold: {
    marginEnd: 20,
    marginStart: 20,
    color: colors.black,
  },
  userName: {
    marginEnd: 20,
    marginStart: 20,
    color: colors.black,
    fontWeight: 'bold',
  },
  commentButton: {
    marginStart: 20,
  },
  addComment: {
    flexDirection: 'row',
    alignItems: 'center',
    marginStart: 10,
  },
  commentText: {
    marginStart: 10,
  },
  dateText: {
    marginStart: 20,
    fontSize: 12,
  },
});
