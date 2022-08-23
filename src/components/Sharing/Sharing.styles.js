import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../color';

const WIDTH = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginStart: 15,
    paddingBottom: 5,
    paddingTop: 5,
  },
  headerTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    marginStart: 5,
    color: colors.black,
    fontWeight: 'bold',
  },
  icon: {
    color: colors.black,
    marginEnd: 15,
  },
  image: {},
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    paddingStart: 0,
    paddingEnd: 0,
  },
  iconsContainerStart: {
    flexDirection: 'row',
  },
  likeBold: {
    marginEnd: 15,
    marginStart: 15,
    color: colors.black,
    fontWeight: 'bold',
  },
  likeAnd: {
    color: colors.black,
    fontWeight: 'normal',
  },
  userName: {
    marginEnd: 15,
    marginStart: 15,
    color: colors.black,
    fontWeight: 'bold',
  },
  userComment: {
    color: colors.black,
    fontWeight: 'normal',
  },
  commentButton: {
    padding: 5,
    paddingStart: 15,
    paddingEnd: 15,
  },
  addComment: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingStart: 15,
    paddingEnd: 15,
  },
  commentText: {
    marginStart: 10,
  },
  dateText: {
    paddingStart: 15,
    paddingEnd: 15,
    paddingTop: 2,
    fontSize: 12,
  },
  imageIcon: {
    height: 25,
    width: 25,
    marginEnd: 10,
    marginStart: 15,
  },
});
