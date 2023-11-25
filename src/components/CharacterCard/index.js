import { View, Text, Image, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setUserCharacterSelected } from "../../store/User/actions";

import Fonts from "../../assets/Fonts";
import Colors from "../../assets/Colors";

import { ImageView } from "../../components/ImageView";

import { ClassIcon } from "../../assets/Icons/classes";
import Edit from "../../assets/Icons/edit.png";
import Selected from "../../assets/Icons/selected.png";

export function CharacterCard({ item, navigation }) {
  const dispatch = useDispatch();
  const { characterSelected } = useSelector((store) => store.user);

  const handleSelectCharacter = () => {
    dispatch(setUserCharacterSelected(Number(item.id)));
  };

  return (
    <View
      style={{
        width: "85%",
        alignSelf: "center",
        flexDirection: "row",
      }}
    >
      <TouchableOpacity
        disabled={true}
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
        {characterSelected === item.id ? (
          <ImageView image={Selected} width={"55%"} />
        ) : (
          <ImageView image={ClassIcon(item.character_class)} width={"100%"} />
        )}
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.9}
        style={{ backgroundColor: Colors.secondary, width: "60%", padding: 20 }}
        onPress={handleSelectCharacter}
      >
        <Text
          style={{ fontFamily: Fonts.regular, fontSize: 15, color: "white" }}
        >
          {item.name}
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
          navigation.navigate("EditCharacter", {
            action: "edit",
            character: item,
          })
        }
      >
        <ImageView image={Edit} width={"100%"} />
      </TouchableOpacity>
    </View>
  );
}
