import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { styles } from "./styles";

export function SignIn() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view}>
        <Text style={styles.text}>SignIn</Text>
      </View>
    </SafeAreaView>
  );
}
