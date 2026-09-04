import { Pressable, StyleSheet, Text, View } from 'react-native'

import { FontAwesome } from '@expo/vector-icons'

const SeeAll = () => {
  return (
    <Pressable style={styles.container}>
      <Text style={styles.text} >See All</Text>

      <View style={styles.arrowContainer}>
        <FontAwesome style={styles.arrow}  name='arrow-right' size={20}/>
      </View>
      
    </Pressable>
  )
}

export default SeeAll

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    gap: 10
  },
  arrowContainer: {
    backgroundColor:'#004CFF',
    height:30,
    width:30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent:'center'
    
  },
  arrow: {
    color: 'white'
  },
  text: {
    fontSize: 15,
    fontWeight:700,
    color:'#202020'
  }
})