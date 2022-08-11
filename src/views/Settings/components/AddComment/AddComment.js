import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './AddComment.styles';
import {Story} from '../../../../components/Story';
import {colors} from '../../../../color';

export default function AddComment() {
  const image_url =
    'https://us.123rf.com/450wm/vadymvdrobot/vadymvdrobot1803/vadymvdrobot180303570/97983244-happy-asian-woman-in-t-shirt-bites-eyeglasses-and-looking-at-the-camera-over-grey-background.jpg?ver=6';

  const [myComment, setMyComment] = useState('');
  return (
    <View style={styles.container}>
      <Story
        container_size={35}
        isBorder={false}
        isStory={false}
        image={image_url}
      />
      <TextInput
        onChangeText={setMyComment}
        placeholder={'user_name olarak yorum yap...'}
        style={styles.input}
        multiline
      />
      <TouchableOpacity disabled={myComment.length > 0 ? false : true}>
        {console.log(myComment.length)}
        <Text
          style={[
            styles.shareText,
            {
              color:
                myComment.length === 0 ? colors.disabled_blue : colors.blue,
            },
          ]}>
          Paylaş
        </Text>
      </TouchableOpacity>
    </View>
  );
}
