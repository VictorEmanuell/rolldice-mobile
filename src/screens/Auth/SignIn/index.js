import { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
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

import { styles } from "./styles";

import { ImageView } from "../../../components/ImageView";
import { InputText } from "../../../components/InputText";
import { Button } from "../../../components/Button";

import LeftArrow from "../../../assets/Icons/right-arrow.png";
import Logo from "../../../assets/Icons/logo.png";

import { setLoading } from "../../../store/Loading/actions";

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

  const logoFade = useSharedValue(150);
  const textDecrease = useSharedValue(20);
  const textSize = useSharedValue(30);

  const logoFadeOut = () => {
    logoFade.value = withTiming(0, { duration: 350 });
    textDecrease.value = withTiming(8, { duration: 350 });
    textSize.value = withTiming(25, { duration: 350 });
  };

  const logoFadeIn = () => {
    logoFade.value = withTiming(150, { duration: 500 });
    textDecrease.value = withTiming(20, { duration: 500 });
    textSize.value = withTiming(30, { duration: 500 });
  };

  // Validators

  const emailValidate = (text) => {
    const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;

    return regex.test(text);
  };

  // Authenticate

  const handleAuthenticate = () => {
    if (email.validate && password.validate) {
      dispatch(setLoading({ active: true, label: "Entrando..." }));
      signInWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
          const user = userCredential.user;

          // console.log(user);
          navigation.navigate('Main');
          navigation.reset({
            index: 0,
            routes: [{ name: "Main" }],
          });
          setTimeout(
            () => dispatch(setLoading({ active: false, label: "" })),
            500
          );
        })
        .catch((error) => {
          console.log(error.code);
          // if (error.code === "auth/email-already-in-use") {
          //   ToastAndroid.show("Usuário já existe!", ToastAndroid.LONG);
          // }
          setTimeout(
            () => dispatch(setLoading({ active: false, label: "" })),
            800
          );
        });
    } else {
      ToastAndroid.show("Preencha os campos corretamente!", ToastAndroid.LONG);
    }
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
              sharedTransitionTag="logoAuth"
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
            <Button
              label="ENTRAR"
              style={{ alignSelf: "flex-end" }}
              onPress={handleAuthenticate}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
      {/* </KeyboardAvoidingView> */}
    </SafeAreaView>
  );
}
