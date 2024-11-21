import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 16,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    height: 150,
    flexDirection: 'column',
    alignSelf: 'stretch',
  },
  cardTitle: {
    fontSize: 14,
    marginBottom: 8,
  },
  cardValue: {
    fontSize: 32,
  },
  cardSubValue: {
    fontSize: 14,
    color: '#555',
  },
  timestamp: {
    fontSize: 12,
    color: '#999',
    marginTop: 8,
  },
});
