import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import RoundedCard from "@/components/RoundedCard";
import WishlistCard from "@/components/WishlistCard";
import { Feather } from "@expo/vector-icons";
import { WhishlistCardData } from "@/data/wishlistCard";
import { SafeAreaView } from "react-native-safe-area-context";


const Favorites = () => {
  return (

      <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Wishlist</Text>

        <View style={styles.headerRow}>
          <Text style={styles.subtitle}>Recently Viewed</Text>
          <TouchableOpacity style={styles.blueCircleBtn}>
            <Feather name="arrow-right" size={18} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

        <RoundedCard />
        {WhishlistCardData.map((item) => (
          <WishlistCard 
            key={item.id}
            image={item.image}
            description={item.description}
            oldPrice={item.oldPrice}
            price={item.price}
            color={item.color}
            size={item.size}
          />
        ))}
      </ScrollView>
    </View>

  );
};

export default Favorites;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 16,
    backgroundColor: "#FFFFFF",
  },

  title: {
    color: "#070101",
    fontSize: 30,
    fontWeight: "700",
    marginBottom: 20,
  },

  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },

  subtitle: {
    color: "#070101",
    fontSize: 20,
    fontWeight: "700",
  },

  blueCircleBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#0052FF",
    justifyContent: "center",
    alignItems: "center",
  },

});
