import {ScrollView, View} from 'react-native';
import {Header} from '../../features/header';
import {styles} from './styles.ts';
import {PagerView} from '../../features/child-data';
import React from 'react';
import {Advert} from '../../features/advert';
import {ChildMilestones} from '../../features/milestones';
import {BottomNavigation} from '../../features/bottom-navigation';
import {SafeAreaView} from 'react-native-safe-area-context';

export const MainPage = () => {
  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <View style={styles.headerContainer}>
        <Header />
      </View>
      <ScrollView style={styles.view} contentContainerStyle={styles.viewContentContainerStyle}>
        <PagerView />
        <Advert />
        <ChildMilestones />
      </ScrollView>
      <BottomNavigation />
    </SafeAreaView>
  );
};
