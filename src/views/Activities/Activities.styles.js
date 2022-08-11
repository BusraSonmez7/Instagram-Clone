import {StyleSheet} from 'react-native';
import {colors} from '../../color';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  titleContainer: {
    borderBottomColor: colors.border,
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  title: {
    fontSize: 30,
    color: colors.black,
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 30,
  },
  subTitle: {
    marginStart: 45,
    marginEnd: 45,
    textAlign: 'center',
    marginBottom: 10,
  },
});
