import {StyleSheet} from 'react-native';
import {colors} from '../../../../../color';

export default StyleSheet.create({
  noListContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  iconValue: {color: colors.black},
  valueContainer: {
    width: 100,
    height: 100,
    borderColor: colors.black,
    borderWidth: 4,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  textProfile: {
    fontSize: 25,
    fontWeight: 'bold',
    color: colors.black,
    marginTop: 10,
    marginEnd: 100,
    marginStart: 100,
    textAlign: 'center',
  },
  textComment: {
    marginTop: 10,
    textAlign: 'center',
    marginEnd: 70,
    marginStart: 70,
    marginBottom: 10,
  },
});
