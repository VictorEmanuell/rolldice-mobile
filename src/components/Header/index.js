import React from "react";
import { View, Text } from "react-native";
import Colors from "../../assets/Colors";
import Fonts from "../../assets/Fonts";

import { ImageView } from "../../components/ImageView";

import DragonLeft from "../../assets/Icons/dragon_left.png";
import DragonRight from "../../assets/Icons/dragon_right.png";

export function Header({ title }) {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Colors.primary,
        paddingVertical: "6%",
        width: "100%",
        flexDirection: "row",
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
      }}
    >
      <ImageView image={DragonLeft} width={26} />
      <Text
        style={{
          fontFamily: Fonts.header,
          fontSize: 26,
          color: "white",
          paddingHorizontal: 15,
        }}
      >
        {title}
      </Text>
      <ImageView image={DragonRight} width={26} />
    </View>
  );
}
