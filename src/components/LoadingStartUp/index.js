import {Modal, Text, View} from "react-native";
import {BlurView} from "expo-blur";
import LottieView from 'lottie-react-native';

import Colors from "../../assets/Colors";

import DiceAnimation from '../../assets/Animations/dice-animation.json'

export function LoadingStartUp({active}) {
    return (
        <Modal
            animationType="fade"
            transparent={true}
            statusBarTranslucent={true}
            visible={active}
        >
            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                <BlurView
                    intensity={70}
                    tint="dark"
                    style={{
                        alignItems: "center",
                        justifyContent: "center",
                        width: "100%",
                        height: "100%",
                    }}
                >
                    <View style={{backgroundColor: Colors.primary, borderRadius: 15, elevation: 4}}>
                        <LottieView
                            source={DiceAnimation}
                            autoPlay
                            style={{
                                width: 90,
                                height: 90,
                                top: -8
                            }}
                        />
                    </View>
                </BlurView>
            </View>
        </Modal>
    );
}
