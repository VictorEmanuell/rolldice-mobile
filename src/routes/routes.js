import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

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

export default function Routes() {
  return (
    <NavigationContainer theme={theme}>
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
  );
}
