import { useState } from "react";
import { View, Text, TextInput } from "react-native";
import Fonts from "../../assets/Fonts";
import Colors from "../../assets/Colors";

export function InputText({ label, placeholder, type, secure, style }) {
  const [focused, setFocused] = useState(false);

  return (
    <View style={{ width: "80%" }}>
      <Text
        style={{
          fontFamily: Fonts.medium,
          fontSize: 16,
          color: "white",
          paddingVertical: 5,
        }}
      >
        {label}
      </Text>

      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#cccccc65"
        cursorColor="#cccccc65"
        style={{
          backgroundColor: Colors.primary,
          borderRadius: 5,
          padding: 8,
          fontFamily: Fonts.regular,
          color: "white",
          borderWidth: focused ? 0.6 : 0,
          borderColor: Colors.lightPurple,
        }}
        textContentType={type}
        secureTextEntry={secure}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      ></TextInput>
    </View>
  );
}
