import {StyleSheet} from 'react-native';
import {CONTAINER_PADDING} from '../../constants.ts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
    padding: CONTAINER_PADDING,
  },
  view: {
    padding: CONTAINER_PADDING,
    gap: CONTAINER_PADDING,
  },
  viewContentContainerStyle: {
    paddingBottom: CONTAINER_PADDING * 2,
  },
});
