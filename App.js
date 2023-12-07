import {useState} from "react";
import "react-native-gesture-handler";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import {StatusBar} from "expo-status-bar";
import {
    Poppins_200ExtraLight,
    Poppins_200ExtraLight_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_800ExtraBold,
    Poppins_800ExtraBold_Italic,
    useFonts,
} from "@expo-google-fonts/poppins";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {Provider} from "react-redux";
import * as SplashScreen from 'expo-splash-screen';

import {store} from "./src/store";

import Colors from "./src/assets/Colors";
import Routes from "./src/routes/routes";

SplashScreen.preventAutoHideAsync();

export default function App() {
    const [loadingStartUp, setLoadingStartUp] = useState(true);
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

    if (fontsLoaded && !fontError) {
        setTimeout(async () => await SplashScreen.hideAsync(), 500);
    }

    return (
        <GestureHandlerRootView
            style={{flex: 1, backgroundColor: Colors.background}}
        >
            <Provider store={store}>
                <SafeAreaProvider
                    style={{
                        flex: 1,
                        backgroundColor: Colors.background,
                    }}
                >
                    <StatusBar style="light"/>
                    <Routes/>
                </SafeAreaProvider>
            </Provider>
        </GestureHandlerRootView>
    );
}
