import bubble01 from "@/assets/snapShopIcons/bubble-01.png";
import bubble02 from "@/assets/snapShopIcons/bubble-02.png";
import image1 from "@/assets/snapShopIcons/image1.png";
import Button from "@/components/Button";
import { router } from "expo-router";
import { useState } from "react";

import {
  Image,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Input from "@/components/Input";

const emailRecover = () => {
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

   const handleSave = () => {
    router.push("/login");
  };

    const handleCancel = () => {
    router.back();
  };

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image source={image1} />
        <Text style={styles.title}>Setup New Password</Text>
        <Text style={styles.subtitle}>
          Please setup new password for {"\n"} your account
        </Text>
      </View>

      <View style={styles.inputContainer}>
        <Input
          placeholder="New Password"
          onChangeText={setPassword}
          value={password}
          secureTextInput
          
        />
        <Input
          placeholder="Repeat Password"
          onChangeText={setRepeatPassword}
          value={repeatPassword}
          secureTextInput
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
           title="Save"
           backgroundColor="#0052FF"
           onPress={handleSave}        
        />

        <TouchableOpacity 
            style={styles.cancelButton}
            onPress={handleCancel}
            activeOpacity={0.7}
        >
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bubble01}>
        <Image source={bubble01} />
      </View>

      <View style={styles.bubble02}>
        <Image source={bubble02} />
      </View>
    </View>
  );
};

export default emailRecover;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
  },

  bubble01: {
    position: "absolute",
    right: 0,
    zIndex: 1,
    top: 0,
  },

  bubble02: {
    position: "absolute",
    right: 0,
  },

  profile: {
    position: "relative",
    marginTop: 200,
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontSize: 22,
    fontFamily: "Raleway",
    fontWeight: "700",
    textAlign: "center",
    top: 13,
    color: "#070101",
    marginBottom: 10,
  },

  subtitle: {
    top: 8,
    fontSize: 18,
    fontFamily: "Nunito Sans",
    color: "#555555",
    textAlign: "center",
    marginBottom: 30,
  },

  inputContainer: {
    width: "82%",
    gap: 12,
    marginBottom: 40,
  },

  buttonContainer: {
    width: "72%",
    alignItems: "center",
  },

  saveButton: {
    width: "100%",
    height: 48,
    backgroundColor: "#6b72f9",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
    
  },

  saveText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
  },

  cancelButton: {
    paddingVertical: 8,
    top: 80,
  },

  cancelText: {
    textAlign: "center",
    color: "#555555",
    fontSize: 16,
  },
});
