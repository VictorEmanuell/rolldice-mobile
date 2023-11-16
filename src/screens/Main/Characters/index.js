import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { styles } from "./styles";

import { Header } from "../../../components/Header";

import { CharactersStack } from "../../../routes/stacks/Main/Characters";

export function Characters() {
  return (
    <SafeAreaView edges={['right', 'top', 'left']} style={styles.container}>
      <Header title="Personagem" />

      <CharactersStack />
    </SafeAreaView>
  );
}
