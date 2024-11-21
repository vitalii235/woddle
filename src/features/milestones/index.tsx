import {useGetProfileQuery} from '../../api/hooks/use-user-query';
import {useGetMilestonesQuery} from '../../api/hooks/use-milestones-hook';
import {Milestone} from '../../components/milestone';
import {View} from 'react-native';
import {styles} from './style.ts';

export const ChildMilestones = () => {
  const {data: profile} = useGetProfileQuery();
  const {data: milestones} = useGetMilestonesQuery(profile?.id!, {
    enabled: !!profile,
  });

  if (!milestones) return null;

  const handlePress = () => {
    console.log('Pressed', milestones.link);
  };

  return (
    <View style={styles.container}>
      <Milestone
        title={milestones.title}
        description={milestones.description}
        onPress={handlePress}
        image={milestones.image}
      />
    </View>
  );
};
