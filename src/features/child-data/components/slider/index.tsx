import {Text, View} from 'react-native';
import React from 'react';
import {useGetProfileQuery} from '../../../../api/hooks/use-user-query';
import {useGetChildInfoQuery} from '../../../../api/hooks/use-child-query';
import {styles} from './styles.ts';
import {Slider} from '../../../../components/slider';

interface PagerViewSliderProps {
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
}

export const PagerViewSlider = ({
  currentIndex,
  setCurrentIndex,
}: PagerViewSliderProps) => {
  const {data: profile} = useGetProfileQuery();
  const {data: childInfo} = useGetChildInfoQuery(profile?.id!, {
    enabled: !!profile,
  });

  if (!childInfo?.length) return null;

  return (
    <>
      <Slider
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        data={childInfo}>
        {item => (
          <View style={styles.overlay}>
            <View style={styles.overlayText}>
              <Text style={styles.babyName}>{item.name}</Text>
              <Text style={styles.babyAge}>
                {item.gender === 'male' ? '♂' : '♀'}
              </Text>
            </View>
            <Text style={styles.babyAge}>{`${item.age}y`}</Text>
          </View>
        )}
      </Slider>
    </>
  );
};
