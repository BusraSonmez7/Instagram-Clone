import {StyleSheet} from 'react-native';
import {colors} from '../../../../../color';

export default StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    margin: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerBackContainer: {
    flexDirection: 'row',
  },
  iconHeader: {
    color: colors.black,
    marginEnd: 20,
  },
  iconHeaderContainer: {
    flexDirection: 'row',
  },
});
