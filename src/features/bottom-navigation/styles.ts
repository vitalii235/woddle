import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    position: 'relative',
    backgroundColor: 'transparent',
    height: 80,
    paddingBottom: 30,
  },
  layout: {
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    backgroundColor: '#FEF9F6',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: 80
  },
  item: {
    alignItems: 'center',
    marginTop: 8
  },
  icon: {
    width: 30,
    height: 30,
  },
  label: {
    marginTop: 5,
    fontSize: 12,
    color: '#333',
    fontWeight: '500',
  },
  centerContainer: {
    alignSelf: 'center',
    backgroundColor: '#FEF9F6',
    borderRadius: 50,
    padding: 10,
    marginBottom: -10
  },
  circleOuter: {
    width: 80,
    height: 80,
    backgroundColor: '#FEF9F6',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
  },
  circleInner: {
    width: 70,
    height: 70,
    backgroundColor: '#CBD6E0',
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#000',
  },
});
