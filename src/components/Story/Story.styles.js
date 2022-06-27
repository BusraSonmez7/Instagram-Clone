import {StyleSheet} from 'react-native';
import {colors} from '../../color';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    margin: 5,
  },
  buttonContainer: {
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {},
  borderGradient: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButton: {
    position: 'absolute',
  },
  addText: {
    textAlign: 'center',
    color: colors.white,
    backgroundColor: colors.add_story,
    borderColor: colors.white,
    borderWidth: 2,
  },
});
