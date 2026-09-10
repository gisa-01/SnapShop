import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import RoundedCard from "@/components/RoundedCard";
import React from "react";
import { Feather } from "@expo/vector-icons";
import WishlistCard from "./WishlistCard";



const Wishlist = () => {
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
        <WishlistCard />
      </ScrollView>
    </View>
  );
};

export default Wishlist;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
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
