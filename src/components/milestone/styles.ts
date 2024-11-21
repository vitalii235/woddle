import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderRadius: 16,
    overflow: 'hidden',
    borderColor: '#000',
    borderWidth: 0.5,
  },
  image: {
    width: '100%',
    height: 150,
  },
  contentBlock: {
    paddingHorizontal: 24,
    paddingVertical: 16,
    flex: 1,
    width: '100%',
  },
  label: {
    fontSize: 12,
    fontWeight: '400',
  },
  controlsBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 32,
    fontWeight: '300',
  },
  circle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrow: {
    width: 20,
    height: 16,
  }
});
