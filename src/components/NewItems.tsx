import { ScrollView, StyleSheet } from 'react-native'

import { ProductCard } from '@/components/ProductCard'

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
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {shoesData.map((item) =>(
        <ProductCard
          key={item.id}
          image={item.image}
          title={item.description}
          price={item.price}
        />
      ))}
    </ScrollView>
  )
}

export default NewItems

const styles = StyleSheet.create({
  container: {
    paddingBottom: 4,
  }
})
