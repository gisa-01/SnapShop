import { Image, StyleSheet, Text, View } from "react-native";
import Card from "@/components/Card";
import ReadyImage from "@/assets/snapShopIcons/ReadyImage.png";
import bubblepass1 from "@/assets/snapShopIcons/bubblepass1.png";
import Button from "@/components/Button";
import { useRouter } from "expo-router";

const ReadyCard = () => {
  
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <Card
          image={ReadyImage}
          title="Ready?"
          description="You absolutely can just import the Button and use it inside the Card."
        />
        <Button
          title="Let's start"
          backgroundColor="blue"
          onPress={() => router.push('/profile')}
          viewStyle={styles.button}
        />
      </View>
      <View style={styles.bubbleContainer}>
          <Image source={bubblepass1} />
        </View>
    </View>
  );
};

export default ReadyCard;

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
  button: {
    width: 201,
    height:50,
    borderRadius:20,
    position:'absolute',
    bottom: 30,
    left: 55
  }
});
