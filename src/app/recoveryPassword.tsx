import bubble01 from "@/assets/snapShopIcons/bubble-01.png";
import bubble02 from "@/assets/snapShopIcons/bubble-02.png";
import image1 from "@/assets/snapShopIcons/image1.png";
import Button from "@/components/Button";
import { router } from "expo-router";
import { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
const RecoveryPassword = () => {
  const [selectedMethod, setSelectedMethod] = useState<"sms" | "email">("sms");
  const handleNext = () => {
    if (selectedMethod === "sms") {
      router.push("/login");
    } 
    else if(selectedMethod === "email"){
      router.push("/login");
    }
  };
  const handleCancel = () => {
    router.back();
  };

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <View style={styles.image1}>
          <Image source={image1} />
        </View>

        <View style={[styles.headerText]}>
          <Text style={styles.title}>Password Recovery</Text>
          <Text style={styles.subtitle}>
            How would you like to restore {"\n"} your password?
          </Text>
        </View>
      </View>

      <View style={styles.optionsContainer}>
        {/* SMS Option */}
        <TouchableOpacity
          style={[
            styles.optionCard,
            selectedMethod === "sms"
              ? styles.smsSelectedCard
              : styles.unSelectedCard,
          ]}
          onPress={() => setSelectedMethod("sms")}
          activeOpacity={0.8}
        >
          <Text
            style={[
              styles.optionText,
              selectedMethod === "sms" && styles.smsSelectedText,
            ]}
          >
            SMS
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.optionCard,
            selectedMethod === "email"
              ? styles.emailSelectedCard
              : styles.unSelectedCard,
          ]}
          onPress={() => setSelectedMethod("email")}
          activeOpacity={0.8}
        >
          <Text
            style={[
              styles.optionText,
              selectedMethod === "email" && styles.emailSelectedText,
            ]}
          >
            Email
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Next" backgroundColor="#0052ff" onPress={handleNext} />

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

export default RecoveryPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    alignItems: "center",
  },

  profile: {
    position: "relative",
    marginTop: 200,
    alignItems: "center",
    justifyContent: "center",
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

  image1: {
    zIndex: 1,
  },

  headerText: {
    alignContent: "center",
  },

  title: {
    fontSize: 22,
    fontFamily: "Raleway",
    fontWeight: "700",
    textAlign: "center",
    color: "#070101",
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 18,
    fontFamily: "Nunito Sans",
    color: "#555555",
    textAlign: "center",
    marginBottom: 10,
  },

  optionsContainer: {
    width: "72%",
    gap: 12,
    alignItems: "center",
  },

  optionCard: {
    borderRadius: 24,
    width: "100%",
    height: 48,
    alignItems: "center",
    justifyContent: "center",
  },

  smsSelectedCard: {
    backgroundColor: "#E6EEFF",
    fontWeight: "700",
  },
  emailSelectedText: {
    color: "#0052FF",
    fontWeight: "700",

  },

  unSelectedCard: {
    backgroundColor: "#FFF0F0",

  },

  optionText: {
    color: "#050404",
    fontWeight: "600",
    fontSize: 15,
  },

  smsSelectedText: {
    color: "#0052FF",
    fontWeight: "700",
    
  },

  cancelButton: {},

  emailSelected: {},

  buttonContainer: {
    top: 60,
  },

  cancelText: {
    textAlign: "center",
    color: "#000000",
    top: 20,
    fontSize: 20,
    

  },
  emailSelectedCard: {
    backgroundColor: "#E6EEFF"
  },
});
