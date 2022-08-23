import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import SearchData from '../../data/search_data';
import styles from './SearchPage.styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function SearchPage() {
  const icon = img => {
    return (
      <Icon
        name={
          img.type === 'images'
            ? 'collections'
            : img.type === 'reels'
            ? 'video-library'
            : null
        }
        size={25}
        style={styles.icon}
      />
    );
  };
  return (
    <View>
      {SearchData.map((data, index) => {
        return (
          <View>
            {data.id === 0 ? (
              <View style={styles.list_right}>
                <View style={styles.list}>
                  {data.images.slice(0, 4).map((img, imgIndex) => {
                    return (
                      <TouchableOpacity activeOpacity={0.9}>
                        {console.log(img)}
                        <Image source={{uri: img.uri}} style={styles.image} />
                        {icon(img)}
                      </TouchableOpacity>
                    );
                  })}
                </View>
                <View>
                  {data.images.slice(4, 5).map((img, imgIndex) => {
                    return (
                      <TouchableOpacity activeOpacity={0.9}>
                        <Image source={img} style={styles.image_two} />
                        {icon(img)}
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </View>
            ) : null}
            {data.id === 1 ? (
              <View style={styles.list_six}>
                {data.images.slice(0, 6).map((img, imgIndex) => {
                  return (
                    <TouchableOpacity activeOpacity={0.9}>
                      <Image
                        source={img}
                        style={[
                          styles.image,
                          {
                            marginEnd: imgIndex === 2 || imgIndex === 5 ? 0 : 2,
                          },
                        ]}
                      />
                      {icon(img)}
                    </TouchableOpacity>
                  );
                })}
              </View>
            ) : null}
            {data.id === 2 ? (
              <View style={styles.list_left}>
                {data.images.slice(4, 5).map((img, imgIndex) => {
                  return (
                    <TouchableOpacity activeOpacity={0.9}>
                      <Image
                        source={img}
                        style={[styles.image_two, {marginEnd: 2}]}
                      />
                      {icon(img)}
                    </TouchableOpacity>
                  );
                })}
                <View style={styles.listBottom}>
                  {data.images.slice(0, 4).map((img, imgIndex) => {
                    return (
                      <TouchableOpacity activeOpacity={0.9}>
                        <Image
                          source={img}
                          style={[
                            styles.image,
                            {
                              marginEnd:
                                imgIndex === 1 || imgIndex === 3 ? 0 : 2,
                            },
                          ]}
                        />
                        {icon(img)}
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </View>
            ) : null}
            {data.id === 3 ? (
              <View style={styles.list_six}>
                {data.images.slice(0, 6).map((img, imgIndex) => {
                  return (
                    <TouchableOpacity activeOpacity={0.9}>
                      <Image
                        source={img}
                        style={[
                          styles.image,
                          {
                            marginEnd: imgIndex === 2 || imgIndex === 5 ? 0 : 2,
                          },
                        ]}
                      />
                      {icon(img)}
                    </TouchableOpacity>
                  );
                })}
              </View>
            ) : null}
          </View>
        );
      })}
    </View>
  );
}
