import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles.ts';
import FastImage from 'react-native-fast-image';
import React from 'react';

interface MilestoneProps {
  image: string;
  title: string;
  description?: string;
  onPress: () => void;
}

export const Milestone = ({
  image,
  title,
  onPress,
}: MilestoneProps) => {

  return (
    <View style={styles.container}>
      <FastImage
        source={{
          uri: image,
        }}
        style={styles.image}
        resizeMode={FastImage.resizeMode.cover}
      />
      <View style={styles.contentBlock}>
        <Text style={styles.label}>Milestones</Text>
        <View style={styles.controlsBlock}>
          <Text style={styles.title}>{title}</Text>
          <TouchableOpacity style={styles.circle} onPress={onPress}>
            {/*TODO: need to be taken from icons lib*/}
            <FastImage
              source={require('../../assets/images/arrow.png')}
              resizeMode={FastImage.resizeMode.cover}
              style={styles.arrow}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
