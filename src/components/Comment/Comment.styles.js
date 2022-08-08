import {StyleSheet} from 'react-native';
import {colors} from '../../color';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    right: 0,
    justifyContent: 'space-between',
    borderBottomColor: colors.circle_border,
  },
  commentContainer: {
    flex: 1,
    alignSelf: 'flex-start',
    marginStart: 10,
    marginEnd: 20,
  },
  userName: {
    fontWeight: 'bold',
    color: colors.black,
  },
  commentText: {
    fontWeight: 'normal',
  },
  commentButtons: {
    flexDirection: 'row',
    marginTop: 10,
  },
  time: {
    marginEnd: 10,
    fontWeight: 'bold',
  },
  like: {
    marginEnd: 10,
    fontWeight: 'bold',
  },
  response: {
    marginEnd: 10,
    fontWeight: 'bold',
  },
  send: {
    marginEnd: 10,
    fontWeight: 'bold',
  },
  likeIcon: {
    alignSelf: 'center',
    color: colors.gray,
  },
});
