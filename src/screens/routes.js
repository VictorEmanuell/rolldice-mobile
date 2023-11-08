import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Start } from "./Auth/Start";
import { SignIn } from "./Auth/SignIn";
import { SignUp } from "./Auth/SignUp";

import Colors from "../assets/Colors";

export const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Start"
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: Colors.background },
          statusBarAnimation: 'fade'
        }}
      >
        <Stack.Screen
          name="Start"
          component={Start}
          options={{
            navigationBarColor: Colors.primary,
            statusBarColor: Colors.primary,
            animation: 'slide_from_right',
          }}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{
            navigationBarColor: Colors.background,
            statusBarColor: Colors.background,
            animation: 'slide_from_right',
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            navigationBarColor: Colors.background,
            statusBarColor: Colors.background,
            animation: 'slide_from_right',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
