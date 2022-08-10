import {StyleSheet} from 'react-native';
import {colors} from '../../color';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  settingItemContainer: {
    marginStart: 15,
    marginEnd: 15,
    marginTop: 10,
  },
  meta: {
    height: 12,
    width: 60,
    margin: 20,
    marginTop: 35,
  },
  blueButton: {
    color: colors.blue,
    fontSize: 16,
    marginStart: 20,
    marginBottom: 20,
  },
  info: {
    marginStart: 20,
    marginEnd: 20,
    marginBottom: 20,
  },
  entries: {
    fontWeight: 'bold',
    fontSize: 16,
    color: colors.black,
    margin: 20,
  },
});
