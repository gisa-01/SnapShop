import bubblepass1 from "@/assets/snapShopIcons/bubblepass1.png";
import bubblepass2 from "@/assets/snapShopIcons/bubblepass2.png";
import profilePicture from "@/assets/snapShopIcons/profilePicture.png";
import Input from "@/components/Input";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

const Password = () => {
  const dots = [1, 2, 3, 4, 5, 6, 7, 8];
  const [password, setPassword] = useState("");

  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.figureContainer}>
        <View style={styles.firstBubble}>
          <Image source={bubblepass1} />
        </View>
        <View style={styles.secondBubble}>
          <Image source={bubblepass2} />
        </View>
      </View>

      <View style={styles.profileContainer}>
        <Image style={styles.image} source={profilePicture} />
      </View>

      <View style={styles.userPasswordContainer}>
        <Text style={styles.helloUser}>Hello, Romina!!</Text>
        <Text style={styles.typePassword}>Type Your Password</Text>
      </View>
      <View style={styles.dotContainer}>
        {dots.map((dot, index) => (
          <View
            key={dot}
            style={[styles.dot, index >= password.length && styles.inactiveDot]}
          />
        ))}
      </View>
      <View style={styles.input}>
        <Input
          placeholder="password"
          value={password}
          onChangeText={setPassword}
          secureTextInput
        />
      </View>

      <Text style={styles.forgotPassword}>Forgot your password?</Text>

      <View style={styles.notYouContainer}>
        <Text style={{ color: "#202020", fontWeight: "300", fontSize: 15 }}>
          Not you?
        </Text>
        <Pressable
          onPress={() => router.push("/login")}
          style={styles.arrowContainer}
        >
          <FontAwesome name="long-arrow-right" color="#FFFFFF" size={24} />
        </Pressable>
      </View>

      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      ></KeyboardAvoidingView>
    </View>
  );
};

export default Password;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
  },
  figureContainer: {
    position: "relative",
  },
  firstBubble: {
    zIndex: 1,
  },
  secondBubble: {
    position: "absolute",
  },
  profileContainer: {
    width: 106,
    height: 106,
    backgroundColor: "white",
    borderRadius: 53,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 150,
    left: 135,
    right: 100,
    zIndex: 2,
  },
  image: {
    width: 91,
    height: 91,
    borderRadius: 45,
  },
  userPasswordContainer: {
    position: "absolute",
    top: 280,
    left: 86,
    right: 100,
  },
  helloUser: {
    fontSize: 28,
    fontWeight: "700",
    color: "#202020",
    lineHeight: 36,
  },
  typePassword: {
    left: 15,
    top: 35,
    fontSize: 19,
    fontWeight: "300",
    color: "#000000",
    lineHeight: 35,
  },
  dotContainer: {
    marginTop: 130,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    gap: 12,
  },
  dot: {
    height: 17,
    width: 17,
    borderRadius: 8,
    backgroundColor: "blue",
    marginBottom: 30,
  },
  input: {
    alignItems: "center",
  },
  inactiveDot: {
    backgroundColor: "#E4EBFA",
  },
  arrowContainer: {
    width: 30,
    height: 30,
    backgroundColor: "#004CFF",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  notYouContainer: {
    width: 105,
    height: 30,
    flexDirection: "row",
    gap: 15,
    position: "absolute",
    bottom: 20,
    alignItems: "center",
    marginVertical: "auto",
    left: "50%",
    transform: "translate(-50%)",
  },
  forgotPassword: {
    width: 170,
    height: 26,
    marginHorizontal: "auto",
    marginTop: 30,
    fontSize: 15,
    lineHeight: 26,
    fontWeight: "300",
  },
});
