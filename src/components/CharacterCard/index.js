import { View, Text, Image, TouchableOpacity } from "react-native";

import Fonts from "../../assets/Fonts";
import Colors from "../../assets/Colors";

import { ImageView } from "../../components/ImageView";

import { ClassIcon } from "../../assets/Icons/classes";
import Edit from "../../assets/Icons/edit.png";

export function CharacterCard({ item: { id, name, className }, navigation }) {
  return (
    <View
      style={{
        width: "85%",
        alignSelf: "center",
        flexDirection: "row",
      }}
    >
      <TouchableOpacity
        activeOpacity={0.9}
        style={{
          backgroundColor: Colors.lightPurple,
          alignItems: "center",
          justifyContent: "center",
          padding: 10,
          borderTopLeftRadius: 5,
          borderBottomLeftRadius: 5,
          width: "20%",
        }}
      >
        <ImageView image={ClassIcon(className)} width={"100%"} />
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.9}
        style={{ backgroundColor: Colors.secondary, width: "60%", padding: 20 }}
      >
        <Text
          style={{ fontFamily: Fonts.regular, fontSize: 15, color: "white" }}
        >
          {name}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.9}
        style={{
          backgroundColor: Colors.primary,
          alignItems: "center",
          justifyContent: "center",
          padding: 20,
          borderTopRightRadius: 5,
          borderBottomRightRadius: 5,
          width: "20%",
        }}
        onPress={() =>
          navigation.navigate("EditCharacter", { id, name, className })
        }
      >
        <ImageView image={Edit} width={"100%"} />
      </TouchableOpacity>
    </View>
  );
}
