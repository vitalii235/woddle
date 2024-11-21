import {styles} from '../../styles.ts';
import FastImage, {Source} from 'react-native-fast-image';
import {Text, TouchableOpacity} from 'react-native';
import React from 'react';

interface BottomNavigationButtonProps {
  source: number | Source | undefined;
  label: string;
}

export const BottomNavigationButton = ({source, label}: BottomNavigationButtonProps) => {
  return (
    <TouchableOpacity style={styles.item}>
      {/*TODO: need to be taken from icons lib*/}
      <FastImage
        style={styles.icon}
        source={source}
        resizeMode={FastImage.resizeMode.contain}
      />
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  )
}
