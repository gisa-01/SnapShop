import { ScrollView, StyleSheet, Text, View } from 'react-native'
import Wishlist from '@/components/Wishlist'

const Favorites = () => {
  return (
    <ScrollView>
      <Wishlist />
    </ScrollView>
  )
}

export default Favorites

const styles = StyleSheet.create({})