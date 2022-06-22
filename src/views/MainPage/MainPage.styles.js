import {StyleSheet} from 'react-native';
import {colors} from '../../color';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
    borderBottomColor: colors.border,
    borderBottomWidth: 1,
  },
  headerTitle: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  headerText: {
    fontSize: 30,
    fontFamily: 'DancingScript-Bold',
    color: colors.black,
  },
  headerTextIcon: {
    marginLeft: 10,
    color: colors.black,
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerIcon: {
    marginLeft: 10,
    color: colors.black,
  },
});
