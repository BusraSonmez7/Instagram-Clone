import {StyleSheet} from 'react-native';
import {colors} from '../../color';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonContainer: {
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
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
