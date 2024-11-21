import {Dimensions, FlatList, NativeScrollEvent, NativeSyntheticEvent, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import React, {useCallback} from 'react';
import {styles} from './styles.ts';

interface SliderProps<T extends {image: string}> {
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
  data: T[];
  children: React.ReactNode | ((item: T) => React.ReactNode);
}

const {width} = Dimensions.get('window');

export const Slider = <T extends {image: string}>({data, setCurrentIndex, currentIndex, children}: SliderProps<T>) => {

  const handleScroll = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const index = Math.round(event.nativeEvent.contentOffset.x / width);
      setCurrentIndex(index);
    },
    [],
  );

  const stylesInstance = styles(data.length);

  return <FlatList
    data={data}
    keyExtractor={(_, index) => index.toString()}
    horizontal
    pagingEnabled
    contentContainerStyle={stylesInstance.listStyle}
    showsHorizontalScrollIndicator={false}
    onScroll={handleScroll}
    renderItem={({item}) => (
      <View style={stylesInstance.page}>
        <FastImage
          source={{
            uri: item.image,
          }}
          style={stylesInstance.image}
          resizeMode={FastImage.resizeMode.cover}
        />
        <View style={stylesInstance.indicatorContainer}>
          {data.map((_, index) => (
            <View
              key={index}
              style={[
                stylesInstance.indicatorDot,
                currentIndex === index ? stylesInstance.activeDot : null,
              ]}
            />
          ))}
        </View>
        {typeof children === 'function' ? children(item) : children}
      </View>
    )}
  />
}
