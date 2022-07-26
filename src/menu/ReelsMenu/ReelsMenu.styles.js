import {StyleSheet} from 'react-native';
import {colors} from '../../color';

export default StyleSheet.create({
  container: {},
  menuContainer: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  circleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    marginTop: 10,
    borderBottomWidth: 0.5,
  },
  icon: {
    color: colors.white,
    marginTop: 15,
  },
  menuIconFirst: {
    color: colors.black,
  },
  bottomText: {
    flex: 1,
    marginStart: 10,
    fontSize: 16,
    marginEnd: 10,
    color: colors.black,
  },
  bottomContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
  },
});
