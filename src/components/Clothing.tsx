import { StyleSheet, View, Image,Text } from 'react-native';

export const clothData = [
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
];

const Clothing = () => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
      {clothData.map((item) => (
        <View key={item.id} style={styles.item}>
          <Image source={item.image} style={styles.image} />
        </View>
      ))}
    </View>
    <View style={styles.clothing}>
      <Text style={styles.clothingText}>Clothing</Text>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>109</Text>
      </View>
    </View>
    </View>
  );
};

export default Clothing;

const styles = StyleSheet.create({
  container: {
    width: 165,
    height: 192,
    marginBottom: 50,
    shadowColor: 'red',
    shadowOffset:{
      width: 0,
      height:20
    },
    shadowOpacity:0.2,
    shadowRadius:4,
    elevation: 4,
    paddingBottom: 100
  },
  subContainer: {
    width: 165,
    height: 192,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 5,
    marginBottom:5
  },

  item: {
    width: 77.5,
    height: 91,
  },

  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 10,
  },
  clothing: {
    flexDirection:'row',
    justifyContent: 'space-between',
    bottom: 0
  },
  clothingText: {
    fontSize: 17,
    lineHeight: 21,
    color:'#202020',
    fontWeight:700
  },
  priceContainer: {
    width:38,
    height:20,
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor: '#DFE9FF',
    borderRadius:6,
    marginRight:7
  },
  price: {
    fontSize:12,
    lineHeight:21,
    fontWeight: 700,
  }
});