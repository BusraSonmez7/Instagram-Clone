import React from 'react';
import {View, Text} from 'react-native';

import styles from './FlatListHead.styles';
import {Header} from '../Header';
import {IconCircle} from '../../../../components/IconCircle';
import {SeeAccountActivity} from '../../../../components/SeeAccountActivity';
import {IconAndActivity} from '../../../../components/IconAndActivity';

export default function FlatListHead() {
  const title = text => {
    return <Text style={styles.title}>{text}</Text>;
  };

  return (
    <View>
      <Header />
      <IconCircle
        title={'Follow requests'}
        icon={'person-add-alt'}
        type={'notification'}
      />
      <SeeAccountActivity
        title={"You're all caught up"}
        icon={'person-add-alt'}
        accountName={'account_name'}
      />
      {title('This Month')}
      <IconAndActivity
        title={
          '723 people created reels using audio you saved, user_name by update post'
        }
        icon={'person-add-alt'}
        type={'icon'}
      />
      {title('Suggestions for you')}
    </View>
  );
}
