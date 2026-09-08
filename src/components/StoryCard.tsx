import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';

export const storyData = [
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
const StoryCard = () => {
  return (
    <ScrollView horizontal style={styles.container}>
      {storyData.map((story) => (
        <View key={story.id} style={styles.imageContainer}>
          <Image source={story.image} style={styles.image} />
          <View style={styles.playButtonContainer}>
            <FontAwesome name='play' size={20} style={styles.play} />
          </View>
        </View>
        
      ))}
    </ScrollView>
  )
}

export default StoryCard

const styles = StyleSheet.create({
  container: {
    width:'100%',
    height:175,
    flexDirection:'row',
    
  },
  imageContainer: {
   position:'relative'
  },
  image: {
    width:104,
    height:'100%',
    marginRight: 10,
    borderRadius:10
    
  },
  playButtonContainer: {
    width:29,
    height:29,
    borderRadius:14,
    backgroundColor:'#D9D9D9',
    position: 'absolute',
    alignItems:'center',
    justifyContent:'center',
    right:48,
    top:78
    

  },
  play:{
    color:'white',
    alignSelf:'center'
  }
})