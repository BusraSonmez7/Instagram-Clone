import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../color';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    marginBottom: 150,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  headerText: {
    fontSize: 25,
    color: colors.black,
    fontWeight: 'bold',
  },
  headerIconContainer: {
    flexDirection: 'row',
  },
  headerIcon: {
    color: colors.black,
    marginStart: 20,
  },
  categoryListContainer: {},
  categoryScroll: {},
  categoryButtonContainer: {
    backgroundColor: colors.border,
    padding: 5,
    marginEnd: 10,
    marginStart: 10,
    borderRadius: 5,
    paddingStart: 20,
    paddingEnd: 20,
  },
  categoryButtonText: {
    color: colors.black,
    fontWeight: 'bold',
  },
  productListContainer: {
    marginTop: 10,
  },
  productImage: {
    width: WIDTH / 2 - 1,
    height: WIDTH / 2 - 1,
    marginEnd: 2,
    marginBottom: 2,
    resizeMode: 'cover',
  },
});
