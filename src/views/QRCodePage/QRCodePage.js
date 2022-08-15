import React from 'react';
import {View, Text, Dimensions, TouchableOpacity} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import LinearGradient from 'react-native-linear-gradient';
import {LinearTextGradient} from 'react-native-text-gradient';
import styles from './QRCodePage.styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default function QRCodePage() {
  return (
    // Within your render function
    <LinearGradient
      colors={[
        '#E80B67',
        '#f10b6b',
        '#f10b6b',
        '#f15d0e',
        '#f15d0e',
        '#f15d0e',
      ]}
      style={styles.linearGradient}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Icon name="close" size={35} style={styles.headerIcon} />
          <TouchableOpacity style={styles.headerButton}>
            <Text style={styles.headerText}>RENK</Text>
          </TouchableOpacity>
          <Icon name="share" size={35} style={styles.headerIcon} />
        </View>
        <View style={styles.qrCodeContainer}>
          <View style={styles.qrCodeBackground}>
            <QRCode
              value={'https://www.google.com'}
              size={WIDTH > HEIGHT ? HEIGHT / 2 : WIDTH / 2}
              color={'purple'}
              enableGradient={true}
              backgroundColor={'transparent'}
              logo={require('../../../assets/images/instagram_logo.png')}
              logoBorderRadius={10}
              linearGradient={['rgb(241,11,107)', 'rgb(241,93,14)']}
              enableLinearGradient={true}
            />
            <LinearTextGradient
              style={{fontWeight: 'bold', fontSize: 40}}
              locations={[0, 1]}
              colors={['#f15d0e', '#d509d3']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}>
              <Text>BUSRASONMEZ6</Text>
            </LinearTextGradient>
          </View>
        </View>
        <TouchableOpacity>
          <View style={styles.qrCodeScannerContainer}>
            <Icon
              name="photo-camera"
              size={35}
              style={styles.qrCodeScannerIcon}
            />
            <Text style={styles.qrCodeScannerText}>QR Kodunu Tara</Text>
          </View>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}
