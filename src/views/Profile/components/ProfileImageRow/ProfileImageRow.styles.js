import {StyleSheet} from 'react-native';
import {colors} from '../../../../color';

export default StyleSheet.create({
  profileImageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginStart: 10,
  },
  contentContainer: {
    alignItems: 'center',
  },
  contentNumber: {
    fontWeight: 'bold',
    color: colors.black,
    fontSize: 16,
  },
  contentType: {
    color: colors.black,
  },
});
