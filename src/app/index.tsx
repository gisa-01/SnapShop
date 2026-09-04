import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import { useRouter, Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import Button from '@/components/Button';
import Input from '@/components/Input'
import icon1 from '@/assets/snapShopIcons/icon1.png';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const HomePage = () => {

  const router = useRouter();
 
  return (
    <View style={styles.container}>
      <StatusBar style='light'/>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={icon1}/>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.snapshop}>SnapShop</Text>
        <View style={styles.description}>
          <Text style={styles.beautiful}>Beautiful eCommerce UI Kit</Text>
          <Text style={styles.online}> for your online store</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title={"Let's get started"}
          onPress={() => router.push('/register')}
          backgroundColor='#004CFF'
        />
      </View>
      <View style={styles.account}>
        <Text>I already have an account</Text>
        <Pressable 
          onPress={() => router.push('/login')}
          style={styles.arrowButton}>
          <FontAwesome name ='long-arrow-right' size={24} color={'white'}/>
        </Pressable>
      </View>

      <Link href='/Shop'>Shop</Link>
    </View>
  )
}

export default HomePage

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent:'center',
    position: 'relative'
  },
  imageContainer: {
    width: 134,
    height:134,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#FFFFFF',
    borderRadius: 67
    
  },
  image: {
    width: 70, 
    height:71,
  },
  titleContainer: {
    alignItems: 'center',
    gap:20, 
  },
  snapshop: {
    fontSize:52,
    fontWeight: 700,
    color:'#202020',
    marginBottom: 10
  },
  description: {
    alignItems:'center',
    justifyContent:'center',

  },
  beautiful: {
    fontSize: 19,
    color: '#202020',
    lineHeight: 33
  },
  online: {
    fontSize: 19,
    color: '#202020'

  },
  buttonContainer: {
     position: 'absolute',
     bottom: 100
  },
  account: {
    position: 'absolute',
    bottom: 40,
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center'
  },
  arrowButton: {
    backgroundColor: '#004CFF',
    height: 30,
    width: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center'
  }
})