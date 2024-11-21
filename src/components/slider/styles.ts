import {Dimensions, StyleSheet} from 'react-native';
import {CONTAINER_PADDING} from '../../constants.ts';

const {width} = Dimensions.get('window');

export const styles =  (elementsCount = 0) =>StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  listStyle: {
    position: 'relative',
  },
  page: {
    width: width - CONTAINER_PADDING * 2,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 16,
  },
  indicatorContainer: {
    flexDirection: 'row',
    marginTop: 8,
    position: 'absolute',
    bottom: 10,
    left: '50%',
    transform: [{ translateX:  -(elementsCount * 8) }],
  },
  indicatorDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'transparent',
    marginHorizontal: 4,
    borderWidth: 1,
    borderColor: '#555',
  },
  activeDot: {
    backgroundColor: '#000',
  },
});
