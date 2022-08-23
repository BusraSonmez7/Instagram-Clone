import {StyleSheet} from 'react-native';
import {colors} from '../../../../../color';

export default StyleSheet.create({
  header: {
    flexDirection: 'row',
    padding: 10,
    paddingStart: 15,
    paddingEnd: 15,
    justifyContent: 'space-between',
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageIcon: {
    height: 25,
    width: 25,
    marginStart: 20,
  },
});
