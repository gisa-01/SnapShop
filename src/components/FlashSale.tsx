import { ImageSourcePropType, StyleSheet, Text, View, Image, Pressable } from 'react-native'
import { useRouter } from 'expo-router';

type cardProps = {
  image: ImageSourcePropType;
  rating: string
};

const FlashSale = ({ image, rating }: cardProps) => {
  const router = useRouter();
  return (
    <Pressable onPress={() => router.push('/flashSaleScreen')} style={styles.container}>
      <Image style={styles.image} source={image} />
      <View style={styles.ratingContainer}>
        <Text style={styles.rating}>{rating}</Text>
      </View>
    </Pressable>
  )
}

export default FlashSale

const styles = StyleSheet.create({
  container: {
    width: 99,
    height:103,
    backgroundColor:'#FFFFFF',
    overflow:'hidden',
    borderRadius: 14,
    marginBottom: 10
  },
  image:{
    width:'100%',
    height:'100%',
    resizeMode: 'cover',
  },
  ratingContainer: {
    
    backgroundColor:'#FF2D55',
    position:'absolute',
    right:8,
    top:8,
    borderRadius: 6,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  rating: {
    color:'white',
    fontSize:10,
    fontWeight:'700',
    
  }

})
