import { useRef, useState } from "react";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../services/firebase";

import Colors from "../assets/Colors";
import { Auth } from "./stacks/Auth";
import { Main } from "./stacks/Main";

import { Loading } from "../components/Loading";
import { LoadingStartUp } from "../components/LoadingStartUp";
import { RollingDice } from "../components/RollingDice";

import { pullUser } from "../store/User/thunks";
import { ToastAndroid } from "react-native";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.background,
  },
};

const { Navigator, Screen } = createNativeStackNavigator();

export default function Routes() {
  const dispatch = useDispatch();
  const [loadingStartUp, setLoadingStartUp] = useState(true);

  const navigationRef = useRef();

  onAuthStateChanged(auth, async (user) => {
    if (user) {
      console.log(user.stsTokenManager.accessToken);

      dispatch(pullUser({ dispatch }));
      ToastAndroid.show("Entrando...", ToastAndroid.SHORT);

      if (
        navigationRef.current &&
        navigationRef.current.getCurrentRoute().name &&
        navigationRef.current.getCurrentRoute().name === "Start"
      ) {
        setTimeout(() => setLoadingStartUp(false), 2000);
        navigationRef.current.navigate("Main");
        navigationRef.current.reset({
          index: 0,
          routes: [{ name: "Main" }],
        });
      }
    } else {
      setLoadingStartUp(false);
    }
  });

  return (
    <>
      <NavigationContainer ref={navigationRef} theme={theme}>
        <Navigator
          initialRouteName="Auth"
          screenOptions={{
            headerShown: false,
            statusBarAnimation: "fade",
          }}
        >
          <Screen
            name="Auth"
            component={Auth}
            options={{
              navigationBarColor: Colors.primary,
              statusBarColor: Colors.primary,
              animation: "slide_from_right",
            }}
          />
          <Screen
            name="Main"
            component={Main}
            options={{
              navigationBarColor: Colors.primary,
              statusBarColor: Colors.primary,
              animation: "slide_from_right",
            }}
          />
        </Navigator>
      </NavigationContainer>

      <Loading />
      <LoadingStartUp active={loadingStartUp} />
      <RollingDice />
    </>
  );
}
