import { StyleSheet, Text, View, TouchableOpacity,Image, } from 'react-native';
import { Feather } from '@expo/vector-icons';
import React from 'react'

const WishlistCard = () => {
  return (
    <View style={styles.card}>
              <View style={styles.imageContainer}>
                <Image
                  source={require("@/assets/snapShopIcons/image1.png")}
                  style={styles.imageContainer}
                />
                <TouchableOpacity style={styles.trashBtn} activeOpacity={0.7}>
                  <Feather name="trash-2" size={16} color="#FF5A79" />
                </TouchableOpacity>
              </View>
    
              <View style={styles.cardContent}>
                <Text style={styles.itemTitle} numberOfLines={2}>
                  Lorem ipsum dolor sit amet consectetur.
                </Text>
    
                <View style={styles.priceRow}>
                  <Text style={styles.oldPrice}>$17,00</Text>
                  <Text style={styles.price}>$12,00</Text>
                </View>
    
                <View style={styles.bottomRow}>
                  <View style={styles.chipRow}>
                    <View style={styles.chip}>
                      <Text style={styles.chipText}>Pink</Text>
                    </View>
                    <View style={styles.chip}>
                      <Text style={styles.chipText}>M</Text>
                    </View>
                  </View>
                  <TouchableOpacity style={styles.cartBtn} activeOpacity={0.7}>
                    <Feather name="shopping-bag" size={24} color="#0052FF" />
                    <View style={styles.plusOverlay}>
                      <Feather name="plus" size={10} color="#0052FF" />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
              </View>
  )
}

export default WishlistCard

const styles = StyleSheet.create({
    card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    marginTop: 20,
    marginBottom: 16,
    gap: 12,
  },

  imageContainer: {
    position: "relative",
    width: 110,
    height: 110,
    borderRadius: 14,
    overflow: "hidden", // Clips image corners properly
  },

  trashBtn: {
    position: "absolute",
    bottom: 8,
    left: 8,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 3,
    elevation: 3,
  },

  cardContent: {
    flex: 1, // Crucial: allows details to take remaining horizontal space without overflowing
    height: 105,
    justifyContent: "space-between",
  },
  itemTitle: {
    fontSize: 14,
    color: "#2B2B2B",
    lineHeight: 18,
    fontWeight: "400",
  },
  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  oldPrice: {
    fontSize: 15,
    color: "#FFA8A8",
    textDecorationLine: "line-through",
  },
  price: {
    fontSize: 18,
    fontWeight: "800",
    color: "#070101",
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  chipRow: {
    flexDirection: "row",
    gap: 8,
  },
  chip: {
    backgroundColor: "#EEF4FF",
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 8,
  },
  chipText: {
    fontSize: 13,
    color: "#070101",
    fontWeight: "500",
  },
  cartBtn: {
    position: "relative",
    padding: 2,
  },
  plusOverlay: {
    position: "absolute",
    bottom: 2,
    left: -2,
    backgroundColor: "#FFFFFF",
    borderRadius: 6,
  },
})