import { Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native'

type forYouProps = {
  id: string;
  image:ImageSourcePropType;
  description:string;
  price:string;
};

const JustForYou = ({ id, image, description, price }: forYouProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={image} />
      </View>
      <View style={styles.text}>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.price}>{price}</Text>
      </View>
    </View>
  )
}

export default JustForYou

const styles = StyleSheet.create({
  container:{
    width:165,
  },
  imageContainer:{
    width: 165,
    height:181,
    backgroundColor:'#FFFFFF',
    padding:5,
    borderRadius: 10,
    elevation:3,
    borderWidth:0
  },
  image: {
    width:'100%',
    height:'100%',
    borderRadius: 10,
    
  },
  text:{
    marginTop:10,
    paddingLeft:10
  },
  description:{
    color:'#000000',
    fontWeight:400,
    fontSize: 12,
    lineHeight:16,
    marginBottom: 5
  },
  price:{
    color:'#202020',
    fontSize:17,
    fontWeight:700,
    lineHeight:21,
    
  }
})