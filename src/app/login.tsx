import Button from "@/components/Button";
import Input from "@/components/Input";
import { router } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Login = () => {
  const [email, setEmail] = useState("");

  const handleNext = () => {
    console.log("Cancel Pressed");
    router.push("/password");
  };

  const handleCancel = () => {
    console.log("Cancel Pressed");
    router.back();
  };
  return (
    <View>
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
          onPress={() => console.log("Next button pressed")}
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
  title: {
    marginTop: 500,
    fontSize: 52,
    left: 20,
    fontWeight: "bold",
    color: "#000000",
  },
  subtitle: {
    left: 20,
    fontSize: 16,
    color: "#666666",
  },

  heart: {
    fontSize: 16,
    color: "#060000",
  },
  input: {
    marginTop: 10,
    left: 20,
  },
  inputSpace: {},

  button: {
    left: 20,
    marginTop: 10,
  },

  cancelText: {
    fontSize: 18,
    color: "#050202",
    left: 150,
    marginTop: 10,
  },

  cancelButton: {},
});
