import { ImageSourcePropType, StyleSheet, Text, View, Image } from 'react-native'

type cardProps = {
  image: ImageSourcePropType;
  rating: string
};

const FlashSale = ({ image, rating }: cardProps) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View style={styles.ratingContainer}>
        <Text style={styles.rating}>{rating}</Text>
      </View>
    </View>
  )
}

export default FlashSale

const styles = StyleSheet.create({
  container: {
    width: 99,
    height:103,
    elevation:10,
    
  },
  image:{
    width: '100%',
    height:'100%',
    borderRadius:12
  },
  ratingContainer: {
    width:39,
    height:18,
    backgroundColor:'#FF2D55',
    position:'absolute',
    right:0
  },
  rating: {
    color:'white',
    fontSize:13,
    lineHeight:17,
    fontWeight:700,
    
  }

})