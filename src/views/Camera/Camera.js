import React from 'react';
import {View} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {CameraPage} from './CameraPage';
import styles from './Camera.styles';

export default function Camera({navigation}) {
  return (
    <View style={styles.container}>
      <RNCamera
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.on}
        androidCameraPermissionOptions={{
          title: 'Kamera kullanma izni',
          message: 'Kameranızı kullanmak için izninize ihtiyacımız var.',
          buttonPositive: 'Tamam',
          buttonNegative: 'İptal',
        }}
        androidRecordAudioPermissionOptions={{
          title: 'Ses kaydını kullanma izni',
          message: 'Sesinizi kullanmak için izninize ihtiyacımız var.',
          buttonPositive: 'Tamam',
          buttonNegative: 'İptal',
        }}
      />
      <CameraPage />
    </View>
  );
}
