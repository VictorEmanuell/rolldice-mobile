import {useEffect, useState} from "react";
import {Dimensions, Modal, Text, View} from "react-native";
import {BlurView} from "expo-blur";
import LottieView from 'lottie-react-native';
import {useDispatch, useSelector} from "react-redux";
import Animated, {useAnimatedStyle, useSharedValue, withSpring, withTiming} from "react-native-reanimated";

import DiceAnimation from '../../assets/Animations/dice-animation.json'

import {setRolling} from "../../store/RollingDice/actions";
import Fonts from "../../assets/Fonts";
import Colors from "../../assets/Colors";
import {BoxResult} from "./BoxResult";
import {rollAttackDefault} from "../../utils/RollDice";

export function RollingDice() {
    const dispatch = useDispatch();
    const character = useSelector(store => store.character)
    const {rolling, payload} = useSelector(store => store.rollingDice);

    const [renderBoxes, setRenderBoxes] = useState(null);

    useEffect(() => {
        resetDice();
        resetBox();
        setRenderBoxes(null);

        if (payload.type === 'attack-default') {
            const rolled = rollAttackDefault({character, attackId: payload.attackId});
            setRenderBoxes((
                <>
                    <BoxResult title="ATAQUE" total={rolled.attack.total} rows={rolled.attack.infos}/>
                    <BoxResult title="DANO" total={rolled.damage.total} rows={rolled.damage.infos}/>
                </>
            ))
        }
        if (payload.type === 'attack-worse') {
        }
        if (payload.type === 'attack-better') {
        }
        if (payload.type === 'skill') {
        }
    }, [rolling]);

    // Animations

    const [diceVisible, setDiceVisible] = useState(true);
    const diceOpacity = useSharedValue(1);
    const boxTranslateY = useSharedValue(1000);

    const fadeOutDice = () => {
        diceOpacity.value = withTiming(0, {duration: 300});
    }

    const resetDice = () => {
        diceOpacity.value = 1;
        setDiceVisible(true);
    }

    const fadeInBox = () => {
        boxTranslateY.value = withSpring(0, {
            duration: 2000,
            dampingRatio: 0.7,
            stiffness: 320,
            overshootClamping: false,
            restDisplacementThreshold: 0.01,
        });
    }

    const resetBox = () => {
        boxTranslateY.value = 1000;
    }

    return (
        <Modal
            animationType="fade"
            transparent={true}
            statusBarTranslucent={true}
            visible={rolling}
            onRequestClose={() => dispatch(setRolling({rolling: false, payload: ""}))}
        >
            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                <BlurView
                    intensity={70}
                    tint="dark"
                    style={{
                        alignItems: "center",
                        width: "100%",
                        height: "100%",
                    }}
                >
                    <View style={{width: '100%', height: '100%'}}>
                        <Text style={{
                            width: '50%',
                            fontFamily: Fonts.header,
                            fontSize: 30,
                            color: 'white',
                            marginTop: 50,
                            backgroundColor: Colors.primary,
                            padding: 10,
                            paddingHorizontal: 20,
                            borderRadius: 10,
                            elevation: 4,
                            textAlign: 'center',
                            alignSelf: 'center'
                        }}>Rolagem</Text>

                        <Animated.View style={[{
                            top: Dimensions.get('window').height / 5.5,
                            left: Dimensions.get('window').width / 12,
                            display: diceVisible ? 'flex' : 'none'
                        }, useAnimatedStyle(() => {
                            "worklet";
                            return {
                                opacity: diceOpacity.value
                            }
                        })]}>
                            <LottieView
                                source={DiceAnimation}
                                autoPlay
                                loop={false}
                                onAnimationFinish={() => {
                                    fadeOutDice();
                                    setTimeout(() => {
                                        setDiceVisible(false)
                                        fadeInBox();
                                    }, 300);
                                }}
                                style={{
                                    width: 300,
                                    height: 300,
                                    top: -24
                                }}
                            />
                        </Animated.View>

                        <Animated.View style={[{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: 30
                        }, useAnimatedStyle(() => {
                            "worklet";
                            return {
                                transform: [
                                    {translateY: boxTranslateY.value}
                                ]
                            }
                        })]}>
                            {renderBoxes}
                        </Animated.View>
                    </View>
                </BlurView>
            </View>
        </Modal>
    );
}
