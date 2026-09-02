import Button from "@/components/Button";
import Input from "@/components/Input";
import { router } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import loginBubble1 from "@/assets/snapShopIcons/loginbubble1.png";
import loginBubble2 from "@/assets/snapShopIcons/loginbubble2.png";
import loginBubble3 from "@/assets/snapShopIcons/loginbubble3.png";


const Login = () => {
  const [email, setEmail] = useState("");

 

  const handleCancel = () => {
    console.log("Cancel Pressed");
    router.back();
  };
  return (
    <View>

      <View style={styles.iconsContainer}>
        <View style={styles.image1}>
          <Image source={loginBubble1} />
        </View>

        <View style={styles.image2}>
          <Image source={loginBubble2} />
        </View>
        <View style={styles.image3}>
          <Image source={loginBubble3}/>
        </View>
      </View>

      <View>
        <Text style={styles.title}>Login</Text>
        <Text style={styles.subtitle}>
          Good to see you back! <Text style={styles.heart}>❤️</Text>
        </Text>
      </View>

      <View style={styles.input}>
        <Input
          placeholder="Email"
          style={styles.inputSpace}
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View style={styles.button}>
        <Button
          title="Next"
          backgroundColor={"#004CFF"}
          onPress={() => router.push('/home')}
        />

        <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  iconsContainer:{
    position:'relative',

  },
  image1: {
    zIndex: 1
  },
  image2: {
    position: 'absolute'
  },
  image3: {
    position:'absolute',
    right:0,
    top: 239
  },


  title: {
    marginTop: 150,
    fontSize: 52,
    left: 20,
    fontWeight: "bold",
    color: "#000000",
  },
  subtitle: {
    left: 20,
    fontSize: 16,
    marginTop: 10,
    color: "#666666",
  },

  heart: {
    fontSize: 16,
    color: "#060000",
  },

  input: {
    marginTop: 20,
    left: 20,
    width:335
  
  },
  inputSpace: {
    width:'100%',
  },

  button: {
    left: 20,
    marginTop: 20,
  },

  cancelText: {
    fontSize: 18,
    color: "#050202",
    left: 150,
    marginTop: 20,
  },

  cancelButton: {},
});
