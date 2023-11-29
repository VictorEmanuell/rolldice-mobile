import { useRef, useState } from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../services/firebase";
import { useDispatch } from "react-redux";
import { setUser } from "../store/User/actions";
import { getUserInfo } from "../services/api/User/GetUser";

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
import { pullUser } from "../store/User/thunks";

export default function Routes() {
  const dispatch = useDispatch();
  const { active, label } = useSelector((store) => store.loading);
  const [loadingStartUp, setLoadingStartUp] = useState(true);

  const navigationRef = useRef();

  onAuthStateChanged(auth, async (user) => {
    if (user) {
      // console.log(user.stsTokenManager.accessToken);

      // const { userBasicInfo, characters } = await getUserInfo(
      //   user.stsTokenManager.accessToken
      // );

      // dispatch(
      //   setUser({
      //     id: user.uid,
      //     name: userBasicInfo.name,
      //     email: userBasicInfo.email,
      //     characters,
      //   })
      // );

      dispatch(pullUser(user.stsTokenManager.accessToken));

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
      <Loading active={loadingStartUp} label={"Entrando..."} />
    </>
  );
}
