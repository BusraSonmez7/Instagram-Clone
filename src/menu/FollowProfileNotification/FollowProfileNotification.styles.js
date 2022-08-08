import {StyleSheet} from 'react-native';
import {colors} from '../../color';

export default StyleSheet.create({
  container: {},
  menuContainer: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 20,
    flex: 1,
  },
  icon: {
    color: colors.black,
    marginStart: 15,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    color: colors.black,
    paddingBottom: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.gray,
  },
  itemContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginStart: 10,
    padding: 12,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  itemText: {
    color: colors.black,
    fontSize: 16,
  },
  bottomItem: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextText: {
    fontSize: 16,
  },
  nextIcon: {
    marginStart: 10,
  },
});
