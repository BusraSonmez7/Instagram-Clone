import {StyleSheet} from 'react-native';
import {colors} from '../../color';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    backgroundColor: 'red',
    borderRadius: 5,
  },
  musicNameContainer: {
    flex: 1,
    marginStart: 10,
    marginEnd: 10,
    justifyContent: 'center',
  },
  icon: {
    color: colors.black,
  },
  musicTitle: {
    color: colors.black,
    fontWeight: 'bold',
  },
  musicInfo: {
    color: colors.gray,
    marginTop: 2,
  },
});
