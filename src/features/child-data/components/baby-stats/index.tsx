import {ScrollView, View} from 'react-native';
import {styles} from './styles.ts';
import {InfoBlock} from '../../../../components/info-block';
import {useGetProfileQuery} from '../../../../api/hooks/use-user-query';
import {useGetChildInfoQuery} from '../../../../api/hooks/use-child-query';
import {useMemo} from 'react';

interface BabyStatsProps {
  currentIndex?: number;
}

export const BabyStats = ({currentIndex = 0}: BabyStatsProps) => {
  const {data: profile} = useGetProfileQuery();
  const {data: childInfo} = useGetChildInfoQuery(profile?.id!, {
    enabled: !!profile,
  });

  if (!childInfo) {
    return null; // Loading state could be handled here
  }

  const babyData = childInfo?.[currentIndex];

  const renderData = useMemo(
    () => [
      [
        {
          title: 'Weight',
          value: babyData?.weight.value,
          timestamp: babyData?.weight.timestamp,
          containerStyle: styles.weight,
        },
        {
          title: 'Diaper',
          value: babyData?.diaperSize.value,
          timestamp: babyData?.diaperSize.timestamp,
          containerStyle: styles.diaper,
        },
      ],
      [
        {
          title: 'Feeding',
          value: babyData?.feeding.value,
          timestamp: babyData?.feeding.timestamp,
          containerStyle: styles.feeding,
        },
        {
          title: 'Sleep',
          value: babyData?.sleeping.value,
          timestamp: babyData?.sleeping.timestamp,
          containerStyle: styles.sleeping,
        },
      ],
    ],
    [babyData],
  );

  return (
    <ScrollView contentContainerStyle={styles.container} scrollEnabled={false}>
      {renderData.map((data, index) => (
        <View key={index} style={styles.gridRow}>
          {data.map(item => (
            <InfoBlock key={item.title} {...item} />
          ))}
        </View>
      ))}
    </ScrollView>
  );
};
