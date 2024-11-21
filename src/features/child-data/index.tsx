import React, {useState} from 'react';
import {View} from 'react-native';
import {useGetChildInfoQuery} from '../../api/hooks/use-child-query';
import {useGetProfileQuery} from '../../api/hooks/use-user-query';
import {styles} from './styles.ts';
import {PagerViewSlider} from './components/slider';
import {BabyStats} from './components/baby-stats';

export const PagerView = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const {data: profile} = useGetProfileQuery();
  const {data: childInfo} = useGetChildInfoQuery(profile?.id!, {
    enabled: !!profile,
  });

  if (!childInfo?.length) return null;

  return (
    <View style={styles.container}>
      <PagerViewSlider currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
      <BabyStats currentIndex={currentIndex} />
    </View>
  );
};
