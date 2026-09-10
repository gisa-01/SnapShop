import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import CartComponent from "@/components/CartComponent";
import { CartComponentData } from "@/data/cartComponentData";

const ShoppingCart = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.headerTextContainer}>
        <Text style={styles.cartText}>Cart</Text>
        <View style={styles.cartTextContainer}>
          <Text style={styles.cartNumber}>2</Text>
        </View>
      </View>
      <View style={styles.headerContainer}>
        <Text style={styles.shippingText}>Shipping Address</Text>
        <View style={styles.detailsLocation}>
          <View style={styles.location}>
            <Text style={styles.locationText}>
              26, Duong So 2, Thao Dien Ward, An Phu, District 2,
            </Text>
            <Text style={styles.locationText}>Ho Chi Minh city</Text>
          </View>
          <Pressable style={styles.pencilContainer}>
            <FontAwesome name="pencil" size={15} color={"#FFFF"} />
          </Pressable>
        </View>
      </View>

      <View style={styles.cardsContainer}>
        <View style={{ gap: 20 }}>
          {CartComponentData.map((data) => (
            <CartComponent
              key={data.id}
              image={data.image}
              description={data.description}
              color={data.color}
              size={data.size}
              price={data.price}
            />
          ))}
        </View>
      </View>
      </ScrollView>
      <View style={styles.totalContainer}>
        <View style={styles.totalCheckout}>
          <View style={{flexDirection:'row', gap:5, alignItems:'center'}}>
            <Text style={styles.total}>Total</Text>
            <Text style={styles.totalAmount}>$34,00</Text>
          </View>
          <Pressable style={styles.checkoutButton}>
            <Text style={styles.checkoutText}>Checkout</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default ShoppingCart;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex:1
  },
  headerContainer: {
    paddingLeft: 15,
    width: 335,
  },
  headerTextContainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  cartText: {
    color: "#202020",
    fontSize: 28,
    fontWeight: 700,
    lineHeight: 36,
  },

  cartTextContainer: {
    height: 30,
    width: 30,
    backgroundColor: "#E5EBFC",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  cartNumber: {
    fontSize: 18,
    fontWeight: 700,
    color: "#000000",
  },
  shippingText: {
    color: "#202020",
    fontWeight: 700,
    marginBottom: 5,
    marginTop: 20,
  },
  location: {
    flexDirection: "column",
  },
  locationText: {
    fontSize: 10,
    color: "black",
    lineHeight: 15,
  },
  pencilContainer: {
    height: 30,
    width: 30,
    backgroundColor: "#004BFE",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
  detailsLocation: {
    flexDirection: "row",
    gap: 25,
    justifyContent: "space-between",
  },
  cardsContainer: {
    width: 335,
    marginHorizontal: "auto",
    marginVertical: 25,
  },
  totalContainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  total: {
    fontSize: 20,
    fontWeight: 800,
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: 700,
  },
  checkoutButton: {
    width: 128,
    height: 40,
    backgroundColor: "#004CFF",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  checkoutText: {
    color: "white",
    fontSize: 16,
    lineHeight: 25,
    fontWeight: 300,
  },
  totalCheckout: {
  width:335,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
  }
});
