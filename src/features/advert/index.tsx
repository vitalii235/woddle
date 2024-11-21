import {useGetAdvertQuery} from '../../api/hooks/use-advert-query';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {styles} from './styles.ts';

export const Advert = () => {
  const {data: advert} = useGetAdvertQuery();

  const handleAdClick = () => {
    console.log('Ad clicked', advert?.link);
  };

  return <View style={styles.adContainer}>
    <Image
      source={{ uri: advert?.image }}
      style={styles.adImage}
    />
    <View style={styles.contentContainer}>
      <Text style={styles.title}>{advert?.title}</Text>
      <View style={styles.controlsContainer}>
        <Text style={{fontSize: 16, fontWeight: 'bold'}}>{advert?.description}</Text>
        <View>
          <TouchableOpacity style={styles.adButton} onPress={handleAdClick}>
            <Text style={styles.adButtonText}>Shop Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </View>;
};
