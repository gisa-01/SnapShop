import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { useState } from "react";
import { Link, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import CountryPicker, {
  Country,
  CountryCode,
} from "react-native-country-picker-modal";
import * as ImagePicker from "expo-image-picker";

import bubble01 from "@/assets/snapShopIcons/bubble-01.png";
import camera from "@/assets/snapShopIcons/camera.png";
import Input from "@/components/Input";
import Button from "@/components/Button";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const HomePage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [countryCode, setCountryCode] = useState<CountryCode>("RW");
  const [country, setCountry] = useState<Country | null>(null);
  const [number, setNumber] = useState("");

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
        <Text style={styles.create}>Create</Text>
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

      <View style={styles.emailPasswordContainer}>
        <Input
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <Input
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextInput
        />

        <View style={styles.countryPickerContainer}>
          <View style={styles.countryPicker}>
            <Pressable>
              <CountryPicker
                countryCode={countryCode}
                withFlag
                withCallingCode
                withFilter
                withAlphaFilter
                onSelect={(country) => {
                  setCountryCode(country.cca2);
                  setCountry(country);
                }}
              />
            </Pressable>
          </View>

          <View style={styles.input}>
            <Input
              placeholder="Your number"
              value={number}
              onChangeText={setNumber}
              keyboardType="numeric"
              style={styles.insideInput}
            />
          </View>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title={"Done"}
          onPress={() => router.push('/login')}
          backgroundColor='#004CFF'
        />
      </View>

      <Link style={{ marginVertical: 20, fontSize: 20}} href={'/password'}>Password page</Link>

      <View style={styles.cancelButton}>
        <Button
          title={"Cancel"}
          onPress={() => router.push('/')}
          backgroundColor='#ffffff'
          style={styles.buttonColor}
        />
      </View>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

  emailPasswordContainer: {
    marginTop: 30,
    gap: 10,
  },

  countryPickerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  countryPicker: {
    position: "absolute",
    zIndex: 1,
    left: 15,
  },

  input: {
    position: "relative",

  },
  insideInput: {
    marginLeft: 35
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 100,
    left: 27
  },
  cancelButton: {
    position: 'absolute',
    bottom: 20,
    left: 27
  },
  buttonColor: {
    color:'#202020',
    fontSize: 15,
  }
 
});