import {StyleSheet} from 'react-native';
import {colors} from '../../../../color';

export default StyleSheet.create({
  name: {
    color: colors.black,
    fontWeight: 'bold',
    fontSize: 16,
    marginStart: 20,
    marginBottom: 10,
  },
  setStatusContainer: {
    width: 150,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.set_status,
    borderRadius: 15,
    marginStart: 20,
    padding: 7,
    justifyContent: 'center',
  },
  iconStatus: {
    color: colors.black,
    marginEnd: 7,
  },
  setStatus: {
    color: colors.black,
  },
  explanation: {
    color: colors.black,
    marginStart: 20,
    marginTop: 10,
  },
  editProfileContainer: {
    flexDirection: 'row',
    flex: 1,
    marginTop: 10,
  },
  editProfileButton: {
    flex: 4,
    backgroundColor: colors.border,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 7,
    marginStart: 20,
    marginEnd: 10,
    borderRadius: 7,
  },
  editProfileIcon: {
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginEnd: 10,
    backgroundColor: colors.edit_profile,
    borderRadius: 7,
  },
  editText: {
    color: colors.black,
    fontWeight: 'bold',
    fontSize: 17,
  },
  editIcon: {
    color: colors.black,
  },
});
