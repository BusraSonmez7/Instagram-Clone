import {StyleSheet} from 'react-native';
import {colors} from '../../color';

export default StyleSheet.create({
  container: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    marginStart: 15,
    marginEnd: 15,
    backgroundColor: colors.search,
    paddingStart: 10,
    paddingEnd: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  iconSearch: {
    color: colors.black,
  },
  inputText: {
    fontSize: 17,
    marginStart: 10,
    fontWeight: '500',
    padding: 0,
    flex: 1,
  },
});
