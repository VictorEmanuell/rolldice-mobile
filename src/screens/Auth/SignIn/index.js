import { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  ToastAndroid,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { useDispatch } from "react-redux";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../services/firebase";
import { loading } from "../../../utils/Loading";
import { emailValidate } from "../../../utils/Validators";

import { styles } from "./styles";

import { ImageView } from "../../../components/ImageView";
import { InputText } from "../../../components/InputText";
import { Button } from "../../../components/Button";

import LeftArrow from "../../../assets/Icons/right-arrow.png";
import Logo from "../../../assets/Icons/logo.png";

export function SignIn({ navigation }) {
  const dispatch = useDispatch();

  const [email, setEmail] = useState({ value: "", validate: true });
  const [password, setPassword] = useState({ value: "", validate: true });

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        logoFadeOut();
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        logoFadeIn();
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  // Animations

  const logoFade = useSharedValue(180);
  const textDecrease = useSharedValue(20);
  const textSize = useSharedValue(30);

  const logoFadeOut = () => {
    logoFade.value = withTiming(0, { duration: 350 });
    textDecrease.value = withTiming(8, { duration: 350 });
    textSize.value = withTiming(25, { duration: 350 });
  };

  const logoFadeIn = () => {
    logoFade.value = withTiming(180, { duration: 500 });
    textDecrease.value = withTiming(20, { duration: 500 });
    textSize.value = withTiming(30, { duration: 500 });
  };

  // Authenticate

  const handleAuthenticate = () => {
    if (email.validate && email.value && password.validate && password.value) {
      loading(dispatch, { active: true, label: "Entrando..." });
      signInWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
          const user = userCredential.user;

          navigation.navigate("Main");
          navigation.reset({
            index: 0,
            routes: [{ name: "Main" }],
          });
        })
        .catch((error) => {
          console.log(error.code);
        });
      loading(dispatch, { active: false, label: "" });
    } else {
      ToastAndroid.show("Preencha os campos corretamente!", ToastAndroid.LONG);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
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
              <Animated.Image
                sharedTransitionTag="logoAuth"
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
              label="Email"
              placeholder="Digite seu email aqui..."
              type="emailAddress"
              keyboardType="email-address"
              onChangeText={(text) =>
                setEmail({
                  value: text,
                  validate: emailValidate(text),
                })
              }
              value={email.value}
              validate={email.validate}
              autoCapitalize="none"
            />
            <InputText
              label="Senha"
              placeholder="•••••••••••••••"
              type="password"
              secure={true}
              onChangeText={(text) =>
                setPassword({
                  value: text,
                  validate: text && text.length >= 6 ? true : false,
                })
              }
              value={password.value}
              validate={password.validate}
            />
          </View>

          <TouchableOpacity
            activeOpacity={0.6}
            style={styles.containerForgotPassword}
          >
            <Text style={styles.textForgotPassword}>Esqueceu a senha?</Text>
          </TouchableOpacity>

          <View style={styles.containerButtonLogin}>
            <Animated.View
              sharedTransitionTag="buttonLogin"
              style={{ alignSelf: "flex-end", width: "62%" }}
            >
              <Button
                label="ENTRAR"
                onPress={handleAuthenticate}
                width={"100%"}
              />
            </Animated.View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}
