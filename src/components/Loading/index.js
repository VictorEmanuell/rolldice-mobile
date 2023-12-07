import {Modal, Text, View} from "react-native";
import {BlurView} from "expo-blur";
import LottieView from 'lottie-react-native';

import Fonts from "../../assets/Fonts";
import Colors from "../../assets/Colors";

import DiceAnimation from '../../assets/Animations/dice-animation.json'
import {useSelector} from "react-redux";

export function Loading({startUp}) {
    const { active, label } = useSelector((store) => store.loading);

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
                        // backgroundColor: Colors.primary,
                        alignItems: "center",
                        justifyContent: "center",
                        width: "100%",
                        height: "100%",
                    }}
                >
                    {/*<ActivityIndicator
                        style={{
                            padding: 10,
                            backgroundColor: Colors.primary,
                            borderRadius: 15,
                            elevation: 4,
                        }}
                        size="large"
                        color={Colors.lightPurple}
                    />*/}

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

                    <Text
                        style={{
                            fontFamily: Fonts.header,
                            fontSize: 15,
                            color: "white",
                            padding: 8,
                        }}
                    >
                        {label}
                    </Text>
                </BlurView>
            </View>
        </Modal>
    );
}
