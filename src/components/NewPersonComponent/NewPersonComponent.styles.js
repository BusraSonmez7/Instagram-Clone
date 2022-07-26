import {StyleSheet} from 'react-native';
import {colors} from '../../color';

export default StyleSheet.create({
  container: {
    width: 150,
    alignItems: 'center',
    marginStart: 5,
    padding: 5,
    borderWidth: 1,
    borderColor: colors.inactiveColor,
    borderRadius: 5,
  },
  iconClose: {
    position: 'absolute',
    right: 5,
    top: 5,
  },
  name: {
    fontWeight: 'bold',
    color: colors.black,
    fontSize: 16,
    marginTop: 5,
  },
  commonFollower: {},
  followButton: {
    width: 120,
    backgroundColor: colors.blue,
    alignItems: 'center',
    padding: 5,
    borderRadius: 5,
    marginTop: 10,
  },
  followText: {
    color: colors.white,
    fontWeight: 'bold',
  },
});
