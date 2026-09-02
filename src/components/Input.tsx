import { Pressable, StyleSheet, TextInput, View, TextStyle } from "react-native";
import { useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";

type InputProps = {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  keyboardType?: "default" | "email-address" | "numeric";
  secureTextInput?: boolean;
  style?: TextStyle;
  onSubmitEditing?: () => void;
};

const Input = ({
  placeholder,
  value,
  onChangeText,
  keyboardType = "default",
  secureTextInput = false,
  style,
  onSubmitEditing
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={[styles.inputContainer, isFocused && styles.inputFocused]}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#D2D2D2"
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        secureTextEntry={secureTextInput && !showPassword}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={[styles.input, style]}
        onSubmitEditing={onSubmitEditing}
      />

      {secureTextInput && (
        <Pressable
          onPress={() => setShowPassword(!showPassword)}
          style={styles.eyeButton}
        >
          <FontAwesome
            name={showPassword ? "eye" : "eye-slash"}
            size={20}
            color="#1F1F1F"
          />
        </Pressable>
      )}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    width: 335,
    height: 50,
    borderWidth: 1,
    borderColor: "#D2D2D2",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
  },

  inputFocused: {
    borderColor: "#004CFF",
  },

  input: {
    flex: 1,
    height: "100%",
    color: "#000000",
    paddingHorizontal: 19,
  },

  eyeButton: {
    paddingHorizontal: 15,
  },

  
});
