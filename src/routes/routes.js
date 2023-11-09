import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Colors from "../assets/Colors";

const { Navigator, Screen } = createNativeStackNavigator();

import { Auth } from "./stacks/Auth";

export default function Routes() {
  return (
    <NavigationContainer>
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
      </Navigator>
    </NavigationContainer>
  );
}
