import { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

import { styles } from "./styles";

import { ImageView } from "../../../components/ImageView";
import { InputText } from "../../../components/InputText";
import { Button } from "../../../components/Button";

import LeftArrow from "../../../assets/Icons/right-arrow.png";
import Logo from "../../../assets/Icons/logo.png";
import { ScrollView } from "react-native-gesture-handler";

export function SignUp({ navigation }) {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        logoFadeOut();
        setKeyboardVisible(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        logoFadeIn();
        setKeyboardVisible(false);
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  // Animations

  const logoFade = useSharedValue(120);
  const textDecrease = useSharedValue(20);
  const textSize = useSharedValue(30);

  const logoFadeOut = () => {
    logoFade.value = withTiming(0, { duration: 350 });
    textDecrease.value = withTiming(8, { duration: 350 });
    textSize.value = withTiming(25, { duration: 350 });
  };

  const logoFadeIn = () => {
    logoFade.value = withTiming(120, { duration: 500 });
    textDecrease.value = withTiming(20, { duration: 500 });
    textSize.value = withTiming(30, { duration: 500 });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <KeyboardAvoidingView behavior="height" style={{ flex: 1 }}> */}
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.backContainer}>
            <TouchableOpacity
              activeOpacity={0.88}
              style={styles.backButton}
              onPress={() => navigation.goBack()}
            >
              <ImageView image={LeftArrow} width={20} />
            </TouchableOpacity>
          </View>

          <View style={styles.containerLogo}>
            <Animated.View
              style={[
                {
                  aspectRatio: 1,
                },
                useAnimatedStyle(() => {
                  "worklet";
                  return {
                    width: logoFade.value,
                  };
                }),
              ]}
            >
              <Image
                source={Logo}
                style={{ width: "100%", height: "100%" }}
                resizeMode="center"
              />
            </Animated.View>

            <Animated.Text
              style={[
                styles.textTitle,
                useAnimatedStyle(() => {
                  "worklet";
                  return {
                    paddingVertical: textDecrease.value,
                    fontSize: textSize.value,
                  };
                }),
              ]}
            >
              ROLLDICE
            </Animated.Text>
          </View>

          <View style={styles.containerInputs}>
            <InputText
              label="Nome"
              placeholder="Digite seu nome aqui..."
              type="name"
            />
            <InputText
              label="Email"
              placeholder="Digite seu email aqui..."
              type="emailAddress"
            />
            <InputText
              label="Senha"
              placeholder="•••••••••••••••"
              type="password"
            />
            <InputText
              label="Confirmar Senha"
              placeholder="•••••••••••••••"
              type="password"
            />
          </View>

          <View style={styles.containerButtonLogin}>
            <Button label="ENTRAR" style={{ alignSelf: "flex-end" }} />
          </View>
        </View>
      </TouchableWithoutFeedback>
      {/* </KeyboardAvoidingView> */}
    </SafeAreaView>
  );
}
