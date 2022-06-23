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
    width: 20,
    height: 20,
    borderRadius: 10,
    position: 'absolute',
    left: 55,
    top: 53,
  },
  addText: {
    width: 20,
    height: 20,
    textAlign: 'center',
    borderRadius: 10,
    color: colors.white,
    backgroundColor: colors.add_story,
    borderColor: colors.white,
    borderWidth: 2,
  },
});
