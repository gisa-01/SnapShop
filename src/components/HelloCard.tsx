import { Image, StyleSheet, Text, View, FlatList } from "react-native";

import Card from "@/components/Card";
import HelloImage from "@/assets/snapShopIcons/HelloImage.png";
import bubblepass1 from "@/assets/snapShopIcons/bubblepass1.png";

const HelloCard = () => {

  
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <Card
          image={HelloImage}
          title="Hello"
          textStyle={styles.description}
          description="You absolutely can just import the Button and use it inside the Card.In fact, if the Card always needs that same Button, that's the simpler approach."
        />
      </View>
      <View style={styles.bubbleContainer}>
          <Image source={bubblepass1} />
        </View>
    </View>
  );
};

export default HelloCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  cardContainer: {
    zIndex: 1,
  },
  bubbleContainer: {
    position: "absolute",
    top: 0,
    left:0,
  },
  description: {
    fontSize: 16
  }
});
