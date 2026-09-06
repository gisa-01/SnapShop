import { Image, ImageSourcePropType, ScrollView, StyleSheet, Text, View } from 'react-native'

export const shoesData = [
  {
    id: '1',
    image: require('../../assets/snapShopIcons/cloth1.png'),
    description: "Lorem ipsum dolor sit amet consec'tetur adipisicing elit.",
    price: '$23.43'
  },
  {
    id: '2',
    image: require('../../assets/snapShopIcons/cloth2.png'),
    description: "Lorem ipsum dolor sit amet consec'tetur adipisicing elit.",
    price: '$32,43',
  },
  {
    id: '3',
    image: require('../../assets/snapShopIcons/cloth3.png'),
    description: "Lorem ipsum dolor sit amet consec'tetur adipisicing elit.",
    price: '$32,21',
  },
  {
    id: '4',
    image: require('../../assets/snapShopIcons/cloth4.png'),
    description: "Lorem ipsum dolor sit amet consec'tetur adipisicing elit.",
    price: '$32,15'
  },
];

const NewItems = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.container}>
      {shoesData.map((item) =>(
        <View key={item.id} style={styles.cardContainer} >
          <Image source={item.image} style={styles.image} />
          <Text style={styles.description}>{item.description}</Text>
          <Text style={styles.price}>{item.price}</Text>
        </View>
      ))}
    </ScrollView>
  )
}

export default NewItems

const styles = StyleSheet.create({
  container: {
    height:247,

  },
  cardContainer: {
    width:157,
    height:237,
    elevation:10,

  },
  image: {
    height:140,
    width:140,
    borderRadius:5,
    elevation:5
  },
  description: {
    fontSize:12,
    marginTop:2,
    lineHeight:16,
    width:140,
    fontWeight:400
  },
  price: {
    fontWeight:700,
    fontSize: 17,
    lineHeight:21
  }
})