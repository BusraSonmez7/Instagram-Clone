import React from 'react';
import {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './QRScanner.styles';
import QRCodeScanner from 'react-native-qrcode-scanner';
import BarcodeMask from 'react-native-barcode-mask';

export default function QRScanner() {
  const onSuccess = e => {
    alert(e);
  };

  return (
    <View>
      <QRCodeScanner
        showMarker
        onRead={onSuccess}
        reactivate={true}
        cameraStyle={styles.qrScanner}
        customMarker={
          <View style={styles.scannerContainer}>
            <LinearGradient
              colors={['#E80B67', '#f10b6b', '#f15d0e']}
              style={styles.linearGradient}>
              <BarcodeMask />
            </LinearGradient>
          </View>
        }
      />
    </View>
  );
}
