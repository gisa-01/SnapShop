import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import * as ImagePicker from "expo-image-picker";
import bubble01 from "@/assets/snapShopIcons/bubble-01.png";
import camera from "@/assets/snapShopIcons/camera.png";
import Input from "@/components/Input";

const HomePage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

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

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <View>
        <Text style={styles.create}> Create</Text>
        <Text style={styles.create}>Account</Text>
      </View>

      <View style={styles.bubbleContainer}>
        <Image source={bubble01} />
      </View>

      <View style={styles.cameraContainer}>
        <Pressable onPress={pickImage}>
          <Image source={camera} />
        </Pressable>
      </View>

      <View>
        <Input 
          placeholder="Email" 
          value={email} 
          onChangeText={setEmail} 
          keyboardType="email-address"
        />

        <View>
          <Input
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextInput

          />
          <View>

          </View>
        </View>
      </View>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    paddingTop: 100,
    paddingLeft: 20,
  },

  create: {
    fontSize: 50,
    lineHeight: 54,
    fontWeight: 700,
  },
  bubbleContainer: {
    position: "absolute",
    right: 0,
  },
  cameraContainer: {
    width: 90,
    height: 90,
    marginTop: 60,
  },
});
