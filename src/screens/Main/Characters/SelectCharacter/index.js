import React, { useEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../../../services/firebase";
import { signOut } from "firebase/auth";
import { loading } from "../../../../utils/Loading";

import { styles } from "./styles";

import { CharacterCard } from "../../../../components/CharacterCard";
import { pullCharacter } from "../../../../store/Character/thunks";

export function SelectCharacter({ navigation }) {
  const dispatch = useDispatch();
  const { characters, characterSelected } = useSelector((store) => store.user);

  useEffect(() => {
    if (characterSelected) {
      dispatch(pullCharacter({ characterId: characterSelected, dispatch }));
    }
  }, [characterSelected]);

  const handleSignOut = () => {
    loading(dispatch, { active: true, label: "Saindo..." });
    signOut(auth)
      .then(() => {
        loading(dispatch, { active: false, label: "", delay: 2000 });
        navigation.navigate("Auth");
        navigation.reset({
          index: 0,
          routes: [{ name: "Auth" }],
        });
      })
      .catch((error) => {
        loading(dispatch, { active: false, label: "", delay: 2000 });
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
        data={characters ? characters : []}
        keyExtractor={(item) => item.id}
        renderItem={(props) => (
          <CharacterCard {...props} navigation={navigation} />
        )}
      />

      <TouchableOpacity
        activeOpacity={0.98}
        style={styles.buttonCreateCharacter}
        onPress={() =>
          navigation.navigate("EditCharacter", { action: "create" })
        }
      >
        <Text style={styles.textCreateCharacter}>CRIAR NOVO PERSONAGEM</Text>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.98}
        style={styles.buttonLogout}
        onPress={handleSignOut}
      >
        <Text style={styles.textLogout}>SAIR</Text>
      </TouchableOpacity>
    </View>
  );
}
