import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  adContainer: {
    marginTop: 16,
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
    position: 'relative',
    justifyContent: 'center',
    height: 80,
  },
  adImage: {
    width: '100%',
    height: "100%",
    position: 'absolute',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  adButton: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: 'black',
  },
  adButtonText: {
    color: '#fff',
    fontSize: 12,
    textTransform: 'uppercase',
    backgroundColor: 'black',
    alignSelf: 'flex-start',
    width: '100%',
  },
  contentContainer: {
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
    paddingVertical: 16,
    height: '100%',
    alignSelf: 'flex-end'
  },
  controlsContainer: {
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center',
  }
});
