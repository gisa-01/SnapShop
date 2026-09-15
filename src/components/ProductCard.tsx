import { Image, ImageSourcePropType, StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";

type ProductCardProps = {
  image: ImageSourcePropType;
  title: string;
  price?: string;
  oldPrice?: string;
  discount?: string;
  style?: StyleProp<ViewStyle>;
};

export const ProductCard = ({
  image,
  title,
  price,
  oldPrice,
  discount,
  style,
}: 

ProductCardProps) => {
  return (
    <View style={[styles.card, style]}>
      <View style={styles.imageBox}>
        <Image source={image} style={styles.image} />
        {discount && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{discount}</Text>
          </View>
        )}
      </View>
      <Text style={styles.title} numberOfLines={2}>
        {title}
      </Text>
      {(price || oldPrice) && (
        <View style={styles.priceRow}>
          {price && <Text style={styles.price}>{price}</Text>}
          {oldPrice && <Text style={styles.oldPrice}>{oldPrice}</Text>}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 165,
    marginRight: 20,
    marginLeft: 3,
    marginBottom: 20,
  },
  imageBox: {
    width: "100%",
    height: 170,
    borderRadius: 14,
    overflow: "hidden",
    position: "relative",
    backgroundColor: "#FFFFFF",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  badge: {
    position: "absolute",
    top: 8,
    right: 8,
    backgroundColor: "#FF2E63",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
  },
  badgeText: {
    color: "#FFFFFF",
    fontSize: 10,
    fontWeight: "700",
  },
  title: {
    fontSize: 12,
    color: "#333333",
    marginTop: 6,
    lineHeight: 16,
  },
  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginTop: 4,
  },
  price: {
    fontSize: 15,
    fontWeight: "800",
    color: "#000000",
  },
  oldPrice: {
    fontSize: 12,
    color: "#FFA8A8",
    textDecorationLine: "line-through",
  },
});
