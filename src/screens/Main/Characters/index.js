import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import WheelPickerExpo from "react-native-wheel-picker-expo";

import { styles } from "./styles";

import { Header } from "../../../components/Header";

export function Characters() {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Personagem" />
    </SafeAreaView>
  );
}
