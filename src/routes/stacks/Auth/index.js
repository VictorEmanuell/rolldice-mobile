import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Navigator, Screen } = createNativeStackNavigator();

import Colors from "../../../assets/Colors";

import { Start } from "../../../screens/Auth/Start";
import { SignIn } from "../../../screens/Auth/SignIn";
import { SignUp } from "../../../screens/Auth/SignUp";

export function Auth() {
  return (
    <Navigator
      initialRouteName="Start"
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: Colors.background },
        statusBarAnimation: "fade",
      }}
    >
      <Screen
        name="Start"
        component={Start}
        options={{
          navigationBarColor: Colors.primary,
          statusBarColor: Colors.primary,
          animation: "slide_from_right",
        }}
      />
      <Screen
        name="SignIn"
        component={SignIn}
        options={{
          navigationBarColor: Colors.background,
          statusBarColor: Colors.background,
          animation: "slide_from_right",
        }}
      />
      <Screen
        name="SignUp"
        component={SignUp}
        options={{
          navigationBarColor: Colors.background,
          statusBarColor: Colors.background,
          animation: "slide_from_right",
        }}
      />
    </Navigator>
  );
}
