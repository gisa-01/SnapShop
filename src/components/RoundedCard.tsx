import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'

export const storyData = [
  {
    id: '1',
    image: require('../../assets/snapShopIcons/cloth1.png'),
  },
  {
    id: '2',
    image: require('../../assets/snapShopIcons/cloth2.png'),
  },
  {
    id: '3',
    image: require('../../assets/snapShopIcons/cloth3.png'),
  },
  {
    id: '4',
    image: require('../../assets/snapShopIcons/cloth4.png'),
  },
  {
    id: '5',
    image: require('../../assets/snapShopIcons/cloth1.png'),
  },
  {
    id: '6',
    image: require('../../assets/snapShopIcons/cloth2.png'),
  },
  {
    id: '7',
    image: require('../../assets/snapShopIcons/cloth3.png'),
  },
];

const RoundedCard = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.imageContainer}>
      {storyData.map((story) => (
        <Image style={styles.image} id={story.id} source={story.image} />
      ))}
    </ScrollView>
  )
}

export default RoundedCard

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: 69,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    flexDirection: 'row',
    marginRight: 30,
    borderWidth: 1,
    borderColor:'lightgrey',
    objectFit: 'cover'
    
  }
})