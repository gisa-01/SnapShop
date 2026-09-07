import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export const mostPopularData = [
  {
    id: "1",
    image: require("../../assets/snapShopIcons/cloth1.png"),
    description: "New",
    year: "2026",
  },
  {
    id: "2",
    image: require("../../assets/snapShopIcons/cloth2.png"),
    description: "Sale",
    year: "2026",
  },
  {
    id: "3",
    image: require("../../assets/snapShopIcons/cloth3.png"),
    description: "Popular",
    year: "2025",
  },
  {
    id: "4",
    image: require("../../assets/snapShopIcons/cloth4.png"),
    description: "Trending",
    year: "2025",
  },
];

const MostPopular = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
      {mostPopularData.map((item) => (
        <View key={item.id} style={styles.cardContainer}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={item.image} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>
              {item.year} <FontAwesome name="heart" color={'#0042E0'} />
            </Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default MostPopular;

const styles = StyleSheet.create({
 scrollContainer: {

    marginBottom:20
  },
  cardContainer: {
    width: 150,
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 8,
    marginRight: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    alignItems: 'center',
  },
  imageContainer: {
    width: '100%',
    height: 160,
    borderRadius: 12,
    overflow: 'hidden',
  },
  image: {
    height: '100%',
    width: '100%',
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: 8,
    paddingHorizontal: 4,
  },
  text: {
    fontSize: 15,
    fontWeight: '700',
    color: '#000000',
  },
  description: {
    fontWeight: '500',
    fontSize: 14,
    color: '#333333',
  },
});
