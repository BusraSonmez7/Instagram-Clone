import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../color';

const WIDTH = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
  },
  qrCodeBackground: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 60,
    backgroundColor: 'white',
    borderRadius: 20,
  },
  qrCodeContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  linearGradient: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-between',
    width: '100%',
  },
  headerIcon: {
    color: colors.white,
  },
  headerButton: {
    borderWidth: 1,
    borderColor: colors.white,
    padding: 7,
    paddingStart: 15,
    paddingEnd: 15,
    borderRadius: 20,
  },
  headerText: {
    fontWeight: 'bold',
    color: colors.white,
  },
  qrCodeScannerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20,
  },
  qrCodeScannerIcon: {
    color: colors.white,
  },
  qrCodeScannerText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
    marginStart: 10,
  },
});
