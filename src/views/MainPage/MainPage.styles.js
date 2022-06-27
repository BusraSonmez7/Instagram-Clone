import {StyleSheet} from 'react-native';
import {colors} from '../../color';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
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
  story: {
    height: 100,
  },
  instagramModalContainer: {
    width: '50%',
    height: '15%',
    backgroundColor: colors.white,
    justifyContent: 'space-evenly',
    borderRadius: 5,
    elevation: 5,
    marginStart: 8,
    marginTop: 63,
  },
  instagramModalView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
  },
  instagramModalText: {
    color: colors.black,
    fontSize: 16,
  },
  instagramModalIcon: {},
});
