import {StyleSheet} from 'react-native';
import {colors} from '../../../../color';

export default StyleSheet.create({
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
  },
  commonFollowers: {
    fontWeight: 'bold',
    color: colors.black,
    marginStart: 20,
    marginTop: 10,
  },
  editProfileContainer: {
    flexDirection: 'row',
    flex: 1,
    marginTop: 10,
  },
  followButton: {
    flex: 1,
    backgroundColor: colors.border,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 7,
    marginStart: 20,
    borderRadius: 7,
  },
  notFollowButton: {
    flex: 1,
    backgroundColor: colors.blue,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 7,
    marginStart: 20,
    borderRadius: 7,
  },
  messageButton: {
    flex: 1,
    backgroundColor: colors.border,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 7,
    marginStart: 10,
    marginEnd: 10,
    borderRadius: 7,
  },
  editProfileIcon: {
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginEnd: 10,
    backgroundColor: colors.border,
    borderRadius: 7,
  },
  followButtonText: {
    color: colors.black,
    fontWeight: 'bold',
    fontSize: 17,
  },
  notFollowButtonText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 17,
  },
  editIcon: {
    color: colors.black,
  },
});
