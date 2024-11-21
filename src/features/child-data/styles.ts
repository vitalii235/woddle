import {Dimensions, StyleSheet} from 'react-native';
import {CONTAINER_PADDING} from '../../constants.ts';

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: 16,
  },
  listStyle: {
    position: 'relative',
  },
  page: {
    width: width - CONTAINER_PADDING * 2,
    position: 'relative',
  },
  babyImage: {
    width: '100%',
    height: 200,
    borderRadius: 16,
  },
  overlay: {
    position: 'absolute',
    top: 10,
    left: 10,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 23,
  },
  overlayText: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    fontSize: 4,
  },
  babyName: {
    fontSize: 14,
  },
  babyAge: {
    fontSize: 14,
    color: '#555',
  },
  indicatorContainer: {
    flexDirection: 'row',
    marginTop: 8,
    position: 'absolute',
    bottom: 10,
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
