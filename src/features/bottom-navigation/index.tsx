import React from 'react';
import {View, Text} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from './styles.ts';
import {BottomNavigationButton} from './components/bottom-navigation-button';

export const BottomNavigation = () => {
  const paddingBottom = useSafeAreaInsets().bottom;

  return (
    <View style={[styles.container, {paddingBottom: paddingBottom + 16}]}>
      <View style={styles.layout} />
      <BottomNavigationButton
        source={require('../../assets/images/home.png')}
        label={'Home'}
      />
      <View style={styles.centerContainer}>
        <View style={styles.circleOuter}>
          <View style={styles.circleInner}>
            <Text style={styles.centerText}>W</Text>
          </View>
        </View>
      </View>
      <BottomNavigationButton
        source={require('../../assets/images/more.png')}
        label={'More'}
      />
    </View>
  );
};
