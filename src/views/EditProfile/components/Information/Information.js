import React from 'react';
import {View} from 'react-native';
import Reinput from 'reinput';
import {colors} from '../../../../color';

import styles from './Information.styles';

export default function Information({title, info}) {
  return (
    <View style={styles.container}>
      <Reinput
        label={title}
        value={info}
        onPress={() => null}
        underlineColor={colors.circle_border}
        underlineActiveColor={colors.circle_border}
        labelActiveColor={colors.gray}
        labelColor={colors.gray}
        fontSize={info === ' ' ? 18 : 15}
        paddingBottom={5}
      />
    </View>
  );
}
