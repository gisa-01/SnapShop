import bubble01 from "@/assets/snapShopIcons/bubble-01.png";
import bubble02 from "@/assets/snapShopIcons/bubble-02.png";
import image1 from "@/assets/snapShopIcons/image1.png";
import { Image, StyleSheet, View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import React, { useState, useRef } from 'react';

const smsRecovery = () => {
const [code, setCode] = useState(["", "", "", ""]);
const inputRef = [
  useRef<TextInput>(null),
  useRef<TextInput>(null),
  useRef<TextInput>(null),
  useRef<TextInput>(null),
];

const handleChangeText = (text: string, index: number) => {
  const newCode = [...code];
  newCode[index] = text;
  setCode(newCode);

  if (text && index < 3) {
    inputRef[index + 1].current?.focus();
  }
};

const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === "Backspace" && !code[index] && index > 0) {
      inputRef[index - 1].current?.focus();
    }
  };
  
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
      <View style={styles.profile}>
        <Image source={image1} />
        <Text style={styles.title}>Password Recovery</Text>
        <Text style={styles.subtitle}>
            Enter 4 digits code we sent you {"\n"} on your phone number
        </Text>
        <Text style={styles.phoneNumber}>+250************00</Text>    
      </View> 

      <View style={styles.codeContainer}>
        {code.map((digit, index) => (
            <TextInput key={index} ref={inputRef[index]}
                style={[styles.codeInput, digit ? styles.codeInputFilled : styles.codeInputEmpty,]}
                keyboardType="number-pad"
                maxLength={1}
                value={digit}
                onChangeText={(text) => handleChangeText(text, index)}
                onKeyPress={(e) => handleKeyPress(e, index)}
           />
        ))}       
      </View> 

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.sendAgainButton} activeOpacity={0.8}>
            <Text style={styles.sendAgainText}>Send Again</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cancelButton} activeOpacity={0.7}>
            <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bubble01}>
        <Image source={bubble01} />
      </View>

      <View style={styles.bubble02}>
        <Image source={bubble02} />
      </View>
      </ScrollView>
    </KeyboardAvoidingView>

  )
}

export default smsRecovery;

const styles = StyleSheet.create({

container: {
  flex: 1,
  backgroundColor: "#FFFFFF",
},

content: {
  flexGrow: 1,
  alignItems: "center",
  paddingBottom: 32,
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
    marginBottom: 10,
  },

  phoneNumber:{
    fontSize: 18,
    fontWeight: "700",
    color: "#000000",
    marginBottom: 24,
  },

  codeInput: {
    width: 20,
    height: 20,
    borderRadius: 10,
    textAlign: "center",
    fontSize: 12,
    fontWeight: "bold",
  },

  codeInputEmpty: {
    backgroundColor: "#E4EAFA",
    color: "transparent",
  },
  
  codeInputFilled: {
    backgroundColor: "#0052FF",
    color: "#FFFFFF",
  },

  codeContainer: {
    flexDirection: "row",
    gap: 16,
    marginBottom: 60,
  },

  buttonContainer: {
    width: "72%",
    alignItems: "center",
  },

  sendAgainButton: {
    width: "100%",
    height: 48,
    backgroundColor: "#f96b91",
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },

  sendAgainText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
  },

  cancelButton: {
    paddingVertical: 8,
  },

  cancelText: {
    textAlign: "center",
    color: "#555555",
    fontSize: 16,
  },

});
