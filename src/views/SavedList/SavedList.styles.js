import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../color';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  topNavigatorContainer: {
    flex: 1,
  },
  backdrop: {
    backgroundColor: colors.black,
    opacity: 0.5,
  },
  guideContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    padding: 15,
  },
  collectionName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.black,
  },
  collectionSize: {
    marginTop: 10,
  },
  createGuide: {
    backgroundColor: colors.search,
    padding: 15,
    paddingBottom: 7,
    paddingTop: 7,
    borderRadius: 5,
  },
  createGuideText: {
    color: colors.black,
    fontWeight: 'bold',
  },
});
