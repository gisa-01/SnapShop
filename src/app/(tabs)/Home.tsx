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
import NewItems from "@/components/NewItems";
import SeeAll from "@/components/SeeAll";
import FlashSale from "@/components/FlashSale";
import Timer from "@/components/Timer";
import banner from "@/assets/snapShopIcons/banner2.png";

const Home = () => {
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

  const handleScroll = (event: {
    nativeEvent: {
      layoutMeasurement: { width: any };
      contentOffset: { x: number };
    };
  }) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const currentIndex = Math.round(
      event.nativeEvent.contentOffset.x / slideSize,
    );
    setActiveIndex(currentIndex);
  };

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.contentContainer}
    >
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
      <View style={styles.categoryContainer}>
        <Text style={styles.categoryName}>Top products</Text>
        <RoundedCard />
      </View>

      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={styles.categoryName}>New Items</Text>
          <SeeAll />
        </View>
        <NewItems />
      </View>

      <View style={styles.header}>
        <View style={styles.timerHeaderContainer}>
          <View style={styles.titleTimeContainer}>
            <Text style={styles.categoryName}>Flash Sale</Text>
            <FontAwesome
              style={{ marginLeft: "35%", color: "#004BFE" }}
              name="clock-o"
              size={24}
            />
          </View>
          <Timer />
        </View>
        <View style={styles.flashSale}>
          <FlashSale image={banner} rating={"-20%"} />
          <FlashSale image={banner} rating={"-20%"} />
          <FlashSale image={banner} rating={"-20%"} />
          <FlashSale image={banner} rating={"-20%"} />
          <FlashSale image={banner} rating={"-20%"} />
          <FlashSale image={banner} rating={"-20%"} />
        </View>
      </View>

      <View>
        <View style={styles.popular}>
          <Text style={styles.mostPopular}>Most Popular</Text>
          <SeeAll />
        </View>
        <NewItems />
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  contentContainer: {
    paddingTop: 50,
    paddingHorizontal: 10,
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
    overflow: "hidden",
  },
  bannerScrollContent: {},
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
  categoryContainer: {
    marginTop: 30,
  },
  categoryName: {
    fontSize: 21,
    color: "#202020",
    fontWeight: 700,
    lineHeight: 30,
    marginBottom: 15,
  },
  timerHeaderContainer: {
    fontSize: 21,
    color: "#202020",
    fontWeight: 700,
    lineHeight: 30,
    marginBottom: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  header: {
    justifyContent: "space-between",
  },
  titleTimeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  discountImage: {
    height: 103,
    width: 99,
    objectFit: "cover",
    elevation: 10,
    padding: 5,
  },
  bunnerContainer: {
    width: 335,
    height: 226,
    borderRadius: 0,
    elevation: 0,
  },
  flashSale: {
    flexDirection: "row",
    gap: 15,
    flexWrap: "wrap",
  },
  mostPopular: {
    marginTop: 20,
    fontSize: 21,
    color: "#202020",
    fontWeight: 700,
    lineHeight: 30,
    marginBottom: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  popular: {
    justifyContent:'space-between',
    flexDirection:'row'
  }
});
