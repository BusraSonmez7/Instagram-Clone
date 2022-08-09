import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../../../color';

const WIDTH = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    padding: 10,
    borderTopColor: colors.gray,
    borderTopWidth: 0.5,
  },
  input: {
    flex: 1,
    marginStart: 10,
    marginEnd: 10,
  },
  shareText: {
    color: colors.blue,
    marginEnd: 10,
    marginBottom: 10,
  },
});
