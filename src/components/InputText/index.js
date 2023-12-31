import { useState } from "react";
import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import Fonts from "../../assets/Fonts";
import Colors from "../../assets/Colors";

import VisiblePass from "../../assets/Icons/visible_pass.png";

export function InputText({
  label,
  placeholder,
  type,
  keyboardType,
  containerStyle,
  onChangeText,
  value,
  validate = true,
  autoCapitalize
}) {
  const [focused, setFocused] = useState(false);
  const [passVisible, setPassVisible] = useState(true);

  return (
    <View style={[{ width: "80%" }, { ...containerStyle }]}>
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

      <View>
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
            borderWidth: !validate ? 0.6 : focused ? 0.6 : 0,
            borderColor: !validate ? Colors.red : Colors.lightPurple,
          }}
          textContentType={type}
          keyboardType={keyboardType}
          secureTextEntry={type === "password" ? passVisible : false}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChangeText={onChangeText}
          value={value}
          autoCapitalize={autoCapitalize}
        />

        {type === "password" && (
          <TouchableOpacity
            activeOpacity={0.88}
            style={{
              aspectRatio: 1,
              width: 20,
              position: "absolute",
              alignSelf: "flex-end",
              justifyContent: "center",
              height: "100%",
              right: 15,
            }}
            onPress={() => setPassVisible(!passVisible)}
          >
            <Image
              source={VisiblePass}
              style={{ width: "100%", height: "100%" }}
              resizeMode="center"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
