import {StyleSheet, Dimensions} from 'react-native';

const WIDTH = Dimensions.get('window').width;

export default StyleSheet.create({
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
