import {View, Text, StyleProp, ViewStyle} from 'react-native';
import {styles} from './styles.ts';

interface InfoBlockProps {
  title: string;
  value: string;
  subValue?: string;
  timestamp?: string;
  containerStyle?: StyleProp<ViewStyle>;
}

export const InfoBlock = ({ title, value, subValue, timestamp, containerStyle }: InfoBlockProps) => {
  return (
    <View style={[styles.card, containerStyle]}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardValue}>{value}</Text>
      {subValue && <Text style={styles.cardSubValue}>{subValue}</Text>}
      {timestamp && <Text style={styles.timestamp}>{timestamp}</Text>}
    </View>
  );
};
