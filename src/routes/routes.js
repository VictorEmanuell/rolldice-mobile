import { useRef } from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../services/firebase";

import Colors from "../assets/Colors";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.background,
  },
};

const { Navigator, Screen } = createNativeStackNavigator();

import { Auth } from "./stacks/Auth";
import { Main } from "./stacks/Main";

import { Loading } from "../components/Loading";

export default function Routes() {
  const { active, label } = useSelector((store) => store.loading);

  const navigationRef = useRef();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      if (
        navigationRef.current &&
        navigationRef.current.getCurrentRoute().name &&
        navigationRef.current.getCurrentRoute().name === "Start"
      ) {
        navigationRef.current.navigate("Main");
        navigationRef.current.reset({
          index: 0,
          routes: [{ name: "Main" }],
        });
      }
      // console.log(user.stsTokenManager.accessToken);
      // console.log(user.uid)
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

      <Loading active={active} label={label} />
    </>
  );
}
