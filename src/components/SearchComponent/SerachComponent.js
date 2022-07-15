import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import SearchData from '../../data/search_data';
import styles from './SearchComponent.styles';
export default function SearchComponent() {
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
                        <Image source={img} style={styles.image} />
                      </TouchableOpacity>
                    );
                  })}
                </View>
                <View>
                  {data.images.slice(5, 6).map((img, imgIndex) => {
                    return (
                      <TouchableOpacity activeOpacity={0.9}>
                        <Image source={img} style={styles.image_two} />
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </View>
            ) : null}
            {data.id === 1 ? (
              <View style={styles.list_six}>
                {console.log(data.images)}
                {data.images.slice(0, 6).map((img, imgIndex) => {
                  return (
                    <TouchableOpacity activeOpacity={0.9}>
                      {console.log(img)}
                      <Image source={img} style={styles.image} />
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
                      <Image source={img} style={styles.image_two} />
                    </TouchableOpacity>
                  );
                })}
                <View style={styles.list}>
                  {data.images.slice(0, 4).map((img, imgIndex) => {
                    return (
                      <TouchableOpacity activeOpacity={0.9}>
                        {console.log(img)}
                        <Image source={img} style={styles.image} />
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </View>
            ) : null}
            {data.id === 3 ? (
              <View style={styles.list_six}>
                {console.log(data.images)}
                {data.images.slice(0, 6).map((img, imgIndex) => {
                  return (
                    <TouchableOpacity activeOpacity={0.9}>
                      {console.log(img)}
                      <Image source={img} style={styles.image} />
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
