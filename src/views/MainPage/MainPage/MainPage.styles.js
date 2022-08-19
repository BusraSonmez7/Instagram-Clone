import {StyleSheet} from 'react-native';
import {colors} from '../../../color';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  story: {
    height: 110,
    borderBottomColor: colors.circle_border,
    borderBottomWidth: 0.5,
  },
  myStoryContainer: {
    alignItems: 'center',
    paddingStart: 10,
    paddingEnd: 5,
  },
  storyName: {
    color: colors.black,
    fontSize: 11,
  },
});
