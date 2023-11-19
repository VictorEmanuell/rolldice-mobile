import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { signOut } from "firebase/auth";
import { auth } from "../../../../services/firebase";

import { styles } from "./styles";

import { CharacterCard } from "../../../../components/CharacterCard";

const CHARACTERS = [
  { id: 1, name: "Drake", className: "Guerreiro" },
  { id: 2, name: "Wyna", className: "Druida" },
  { id: 3, name: "Jean", className: "Caçador" },
];

export function SelectCharacter({ navigation }) {
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigation.navigate("Auth");
        navigation.reset({
          index: 0,
          routes: [{ name: 'Auth' }],
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Selecione personagem ativo</Text>

      <FlatList
        style={{ width: "100%" }}
        contentContainerStyle={styles.flatList}
        showsVerticalScrollIndicator={false}
        data={CHARACTERS}
        keyExtractor={(item) => item.id}
        renderItem={(props) => (
          <CharacterCard {...props} navigation={navigation} />
        )}
      />

      <TouchableOpacity
        activeOpacity={0.98}
        style={styles.buttonCreateCharacter}
        onPress={handleSignOut}
      >
        <Text style={styles.textCreateCharacter}>CRIAR NOVO PERSONAGEM</Text>
      </TouchableOpacity>
    </View>
  );
}
