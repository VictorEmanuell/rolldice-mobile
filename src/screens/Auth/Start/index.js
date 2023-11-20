import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Animated from "react-native-reanimated";

import { styles } from "./styles";

import { Button } from "../../../components/Button";

import Logo from "../../../assets/Icons/logo.png";

export function Start({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBox}>
        <View style={styles.image}>
          <Animated.Image
            sharedTransitionTag="logoAuth"
            source={Logo}
            style={{ width: "100%", height: "100%" }}
            resizeMode="center"
          />
        </View>

        <Text style={styles.textTitle}>ROLLDICE</Text>
      </View>

      <View style={styles.buttonsBox}>
        <Animated.View
          sharedTransitionTag="buttonLogin"
          style={{ width: "50%" }}
        >
          <Button
            label="ENTRAR"
            onPress={() => navigation.navigate("SignIn")}
            width={"100%"}
          />
        </Animated.View>
        <Button
          label="CADASTRE-SE"
          onPress={() => navigation.navigate("SignUp")}
        />
      </View>

      <View style={styles.bottomBox} />
    </SafeAreaView>
  );
}
