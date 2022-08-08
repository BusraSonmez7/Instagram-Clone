import {StyleSheet} from 'react-native';
import {colors} from '../../../../color';

export default StyleSheet.create({
  profileImageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  contentContainer: {
    alignItems: 'center',
  },
  contentNumber: {
    fontWeight: 'bold',
    color: colors.black,
  },
  contentType: {
    color: colors.black,
  },
});
