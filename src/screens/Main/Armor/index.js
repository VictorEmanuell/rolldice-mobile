import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { styles } from "./styles";

import { Header } from "../../../components/Header";

export function Armor() {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Armadura" />
    </SafeAreaView>
  );
}
