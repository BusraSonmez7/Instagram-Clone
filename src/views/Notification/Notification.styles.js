import {StyleSheet} from 'react-native';
import {colors} from '../../color';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    backgroundColor: colors.border,
    paddingStart: 10,
    borderRadius: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginBottom: 20,
    marginStart: 5,
  },
  headerIcon: {
    color: colors.black,
    marginEnd: 20,
  },
  headerText: {
    fontSize: 23,
    fontWeight: 'bold',
    color: colors.black,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: colors.black,
    margin: 20,
  },
});
