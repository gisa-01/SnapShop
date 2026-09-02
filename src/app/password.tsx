import bubblepass1 from "@/assets/snapShopIcons/bubblepass1.png";
import bubblepass2 from "@/assets/snapShopIcons/bubblepass2.png";
import profilePicture from "@/assets/snapShopIcons/profilePicture.png";
import Input from "@/components/Input";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, useRouter } from "expo-router";
import { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const Password = () => {
  const dots = [1, 2, 3, 4, 5, 6, 7, 8];
  const [password, setPassword] = useState("");

  const router = useRouter();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >

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
        <Text style={styles.typePassword}>Type your password</Text>
      </View>

      <View style={styles.dotContainer}>
        {dots.map((dot, index) => (
          <View
            key={dot}
            style={[styles.dot, index >= password.length && styles.inactiveDot]}
          />
        ))}
      </View>


      <View style={styles.inputContainer}>
        <Input
          placeholder="password"
          value={password}
          onChangeText={setPassword}
          secureTextInput
          onSubmitEditing={() => {
            router.push('/profile')
          }}
        />
      </View>


      <Link style={styles.forgotPassword} href="/recoveryPassword">
        <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
      </Link>

      <View style={styles.footerContainer}>
        <View style={styles.notYouContainer}>
          <Text style={styles.notYouText}>Not you?</Text>
          <Pressable
            onPress={() => router.push("/login")}
            style={styles.arrowContainer}
          >
            <FontAwesome name="long-arrow-right" color="#FFFFFF" size={18} />
          </Pressable>
        </View>
      </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Password;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  content: {
    flexGrow: 1,
    minHeight: "100%",
    paddingBottom: 32,
  },
  figureContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
  },
  firstBubble: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 1,
  },
  secondBubble: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 0,
  },
  profileContainer: {
    width: 106,
    height: 106,
    backgroundColor: "white",
    borderRadius: 53,
    alignSelf: "center",
    marginTop: 130,
    zIndex: 3,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: 94,
    height: 94,
    borderRadius: 47,
  },
  userPasswordContainer: {
    alignItems: "center",
    marginTop: 50,
    zIndex: 3,
  },
  helloUser: {
    fontSize: 26,
    fontWeight: "700",
    color: "#202020",
    lineHeight: 34,
  },
  typePassword: {
    fontSize: 16,
    fontWeight: "400",
    color: "#555555",
    marginTop: 6,
  },
  dotContainer: {
    marginTop: 25,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
  },
  dot: {
    height: 14,
    width: 14,
    borderRadius: 7,
    backgroundColor: "#004CFF",
  },
  inactiveDot: {
    backgroundColor: "#E4EBFA",
  },
  inputContainer: {
    paddingHorizontal: 30,
    marginTop: 20,
  },
  forgotPassword: {
    alignSelf: "center",
    marginTop: 15,
  },
  forgotPasswordText: {
    fontSize: 14,
    color: "#555555",
    fontWeight: "400",
  },
  footerContainer: {
    paddingHorizontal: 24,
    marginTop: 48,
    marginBottom: 8,
    width:120,
    alignSelf: "center",
  },
  notYouContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  notYouText: {
    color: "#202020",
    fontWeight: "400",
    fontSize: 15,
  },
  arrowContainer: {
    width: 32,
    height: 32,
    backgroundColor: "#004CFF",
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
});
