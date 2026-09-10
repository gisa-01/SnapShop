import { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
  Pressable,
} from "react-native";

type CartProps = {
  image: ImageSourcePropType;
  description: string;
  color: string;
  size: string;
  price: string;
};

const CartComponent = ({
  image,
  description,
  color,
  size,
  price,
}: CartProps) => {
  const [cart, setCart] = useState(0);

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={image} />
          <View style={styles.trash}>
            <FontAwesome name="trash" size={24} color={"#D97474"} />
          </View>
        </View>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.description}>{description}</Text>

        <Text>
          {color}, Size {size}
        </Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems:'center'}}>
          <Text style={styles.price}>{price}</Text>
          <View style={{ flexDirection: "row", gap: 20, alignItems: "center" }}>
            <Pressable onPress={() => setCart(cart - 1)}>
              <FontAwesome name="plus-circle" size={30} color={"#004BFE"} />
            </Pressable>
            <View style={styles.cartTextContainer}>
              <Text style={styles.cartText}>{cart}</Text>
            </View>
            <Pressable onPress={() => setCart(cart + 1)}>
              <FontAwesome name="minus-circle" size={30} color={"#004BFE"} />
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartComponent;

const styles = StyleSheet.create({
  container: {
    width: 335,
    height: 109,
    
    padding: 5,
    flexWrap: "wrap",
  },
  imageContainer: {
    width: 121.18,
    height: "100%",
  },
  image: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
    borderRadius: 5,
  },
  trash: {
    backgroundColor: "white",
    width: 35,
    height: 35,
    borderRadius: 17.5,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 5,
    left: 5,
  },
  textContainer: {
    marginLeft: 10,
    width: 196,
    gap: 10,
  },
  description: {
    fontSize: 12,
  },
  addButton: {
    width: 30,
    height: 30,
    borderRadius: 14,
    borderColor: "blue",
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  price: {
    fontSize: 18,
    fontWeight: 700,
    lineHeight: 22,
  },
  cartTextContainer: {
    width:37,
    height:30,
    backgroundColor:'#E5EBFC',
    borderRadius:5,
    alignItems:'center',
    justifyContent:'center'
  },
  cartText: {
    fontSize: 16,
    fontWeight: 500,
    lineHeight: 20,
  },
});
