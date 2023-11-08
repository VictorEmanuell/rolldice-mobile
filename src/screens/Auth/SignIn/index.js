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

export function SignIn({ navigation }) {
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

  const logoFade = useSharedValue(150);

  const logoFadeOut = () => {
    logoFade.value = withTiming(0, { duration: 350 });
  };

  const logoFadeIn = () => {
    logoFade.value = withTiming(150, { duration: 500 });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView behavior="height" style={{ flex: 1 }}>
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

              <Text style={styles.textTitle}>ROLLDICE</Text>
            </View>

            <View style={styles.containerInputs}>
              <InputText
                label="Email"
                placeholder="Digite seu email aqui..."
                type="emailAddress"
              />
              <InputText
                label="Senha"
                placeholder="•••••••••••••••"
                type="password"
                secure={true}
              />
            </View>

            <TouchableOpacity
              activeOpacity={0.6}
              style={styles.containerForgotPassword}
            >
              <Text style={styles.textForgotPassword}>Esqueceu a senha?</Text>
            </TouchableOpacity>

            <View style={styles.containerButtonLogin}>
              <Button label="ENTRAR" style={{ alignSelf: "flex-end" }} />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
