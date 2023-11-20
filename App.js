import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import {
  useFonts,
  Poppins_200ExtraLight,
  Poppins_200ExtraLight_Italic,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
  Poppins_800ExtraBold,
  Poppins_800ExtraBold_Italic,
} from "@expo-google-fonts/poppins";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { store } from "./src/store";

import Colors from "./src/assets/Colors";

import Routes from "./src/routes/routes";

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    Poppins_200ExtraLight,
    Poppins_200ExtraLight_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_800ExtraBold,
    Poppins_800ExtraBold_Italic,
    Sansation_Light: require("./assets/fonts/Sansation_Light.ttf"),
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <GestureHandlerRootView
      style={{ flex: 1, backgroundColor: Colors.background }}
    >
      <Provider store={store}>
        <SafeAreaProvider
          style={{
            flex: 1,
            backgroundColor: Colors.background,
          }}
        >
          <StatusBar style="light" />
          <Routes />
        </SafeAreaProvider>
      </Provider>
    </GestureHandlerRootView>
  );
}
