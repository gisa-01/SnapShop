import { ImageSourcePropType, StyleSheet } from 'react-native'

import { ProductCard } from '@/components/ProductCard'

type forYouProps = {
  id: string;
  image:ImageSourcePropType;
  description:string;
  price:string;
};

const JustForYou = ({ image, description, price }: forYouProps) => {
  return (
    <ProductCard
      image={image}
      title={description}
      price={price}
      style={styles.container}
    />
  )
}

export default JustForYou

const styles = StyleSheet.create({
  container:{
    marginRight: 0,
  }
})
