import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Animated from 'react-native-reanimated'

import { styles } from "./styles";

import Logo from "../../../assets/Icons/logo.png";

import { Button } from "../../../components/Button";

export function Start({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBox}>
        <Animated.View sharedTransitionTag="logoAuth" style={styles.image}>
          <Image
            source={Logo}
            style={{ width: "100%", height: "100%" }}
            resizeMode="center"
          />
        </Animated.View>

        <Text style={styles.textTitle}>ROLLDICE</Text>
      </View>

      <View style={styles.buttonsBox}>
        <Button label="ENTRAR" onPress={() => navigation.navigate("SignIn")} />
        <Button label="CADASTRE-SE" onPress={() => navigation.navigate("SignUp")} />
      </View>

      <View style={styles.bottomBox} />
    </SafeAreaView>
  );
}
