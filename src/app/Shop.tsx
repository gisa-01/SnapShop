import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
  Image,
  useWindowDimensions,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { FontAwesome } from "@expo/vector-icons";

import Input from "@/components/Input";
import { bannerData } from "@/data/heroBannerData";
import Categories from "@/components/Categories";
import RoundedCard from "@/components/RoundedCard";

const Shop = () => {
  const [search, setSearch] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const { width } = useWindowDimensions();

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      console.log(result.assets[0].uri);
    }
  };

  const handleScroll = (event: { nativeEvent: { layoutMeasurement: { width: any; }; contentOffset: { x: number; }; }; }) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const currentIndex = Math.round(event.nativeEvent.contentOffset.x / slideSize);
    setActiveIndex(currentIndex);
  };

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.contentContainer}>
 
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Shop</Text>
        <View style={styles.inputContainer}>
          <Input
            placeholder="Search"
            value={search}
            onChangeText={setSearch}
            viewStyle={styles.input}
            style={styles.inputFont}
          />
          <Pressable style={styles.cameraIconContainer} onPress={pickImage}>
            <FontAwesome name="camera" size={22} style={styles.cameraIcon} />
          </Pressable>
        </View>
      </View>

      <View style={styles.heroBannerWrapper}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          onScroll={handleScroll}
          scrollEventThrottle={16}
          contentContainerStyle={styles.bannerScrollContent}
        >
          {bannerData.map((item) => (
            <Image
              key={item.id}
              source={item.image}
              style={styles.imageBanner}
            />
          ))}
        </ScrollView>


        <View style={styles.paginationContainer}>
          {bannerData.map((item, index) => (
            <View
              key={item.id}
              style={[
                styles.dot,
                activeIndex === index ? styles.activeDot : styles.inactiveDot,
              ]}
            />
          ))}
        </View>
      </View>
      <Categories />
      <View style={styles.topProductsContainer}>
        <Text style={styles.topProducts}>Top products</Text>
        <RoundedCard />
      </View>
    </ScrollView>
  );
};

export default Shop;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  contentContainer: {
    paddingTop: 50, // Safe area padding placeholder
   paddingHorizontal: 30,
    paddingBottom: 40,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  headerText: {
    color: "#202020",
    fontSize: 28,
    fontWeight: "700",
    lineHeight: 36,
  },
  inputContainer: {
    flex: 1,
    maxWidth: 240,
    height: 45,
    justifyContent: "center",
  },
  input: {
    borderWidth: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "#F8F8F8",
    borderRadius: 18,
    paddingLeft: 15,
    paddingRight: 45,
  },
  inputFont: {
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 21,
  },
  cameraIconContainer: {
    position: "absolute",
    right: 12,
    top: 11,
  },
  cameraIcon: {
    color: "#0042E0",
  },
  heroBannerWrapper: {
    width: "100%",
    alignSelf: "center",
    overflow: 'hidden',
    
  },
  bannerScrollContent: {

  },
  imageBanner: {
    width: 335,
    height: 130,
    borderRadius: 15,
    marginRight: 0,
  },
  paginationContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 12,
    gap: 6,
  },
  dot: {
    height: 8,
    borderRadius: 4,
  },
  activeDot: {
    width: 28,
    backgroundColor: "#0042E0",
  },
  inactiveDot: {
    width: 8,
    backgroundColor: "#D9D9D9",
  },
  topProductsContainer: {
    marginTop: 30,
  },
  topProducts: {
    fontSize:21,
    color:'#202020',
    fontWeight:700,
    lineHeight:30,
    
  }
});