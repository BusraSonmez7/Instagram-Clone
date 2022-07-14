import React from 'react';
import {View, Image} from 'react-native';
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
                      <View>
                        {console.log(img)}
                        <Image source={img} style={styles.image} />
                      </View>
                    );
                  })}
                </View>
                <View>
                  {data.images.slice(5, 6).map((img, imgIndex) => {
                    return (
                      <View>
                        <Image source={img} style={styles.image_two} />
                      </View>
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
                    <View>
                      {console.log(img)}
                      <Image source={img} style={styles.image} />
                    </View>
                  );
                })}
              </View>
            ) : null}
            {data.id === 2 ? (
              <View style={styles.list_left}>
                {data.images.slice(4, 5).map((img, imgIndex) => {
                  return (
                    <View>
                      <Image source={img} style={styles.image_two} />
                    </View>
                  );
                })}
                <View style={styles.list}>
                  {data.images.slice(0, 4).map((img, imgIndex) => {
                    return (
                      <View>
                        {console.log(img)}
                        <Image source={img} style={styles.image} />
                      </View>
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
                    <View>
                      {console.log(img)}
                      <Image source={img} style={styles.image} />
                    </View>
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
