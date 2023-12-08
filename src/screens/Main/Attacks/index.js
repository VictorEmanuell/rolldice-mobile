import {useEffect, useRef, useState} from 'react';
import {Dimensions, Text, TouchableOpacity, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import Carousel from "react-native-reanimated-carousel";
import {useDispatch, useSelector} from 'react-redux';

import {styles} from "./styles";

import {Header} from "../../../components/Header";
import {AttackCard} from "../../../components/AttackCard";
import {EditAttack} from "./EditAttack";

export function Attacks({navigation}) {
    const dispatch = useDispatch();
    const {attacks} = useSelector(store => store.character);

    const [attacksData, setAttacksData] = useState(attacks);
    const [modalEditState, setModalEditState] = useState({visible: false});
    const carousel = useRef();

    useEffect(() => {
        if (attacks.length > attacksData.length && attacksData.length !== 0) {
            setAttacksData(attacks);
            setTimeout(() => {
                let index = carousel.current.getCurrentIndex();

                carousel.current.next({
                    count: (attacks.length - 1) - index
                });
            }, 1000)
        } else {
            setAttacksData(attacks);
        }
    }, [attacks]);

    const width = Dimensions.get("window").width;
    const height = Dimensions.get("window").height;

    return (
        <SafeAreaView edges={["right", "top", "left"]} style={styles.container}>
            <Header title="Ataques"/>

            <View style={styles.containerContent}>
                <Carousel
                    ref={carousel}
                    loop={false}
                    width={width}
                    height={height * 0.68}
                    autoPlay={false}
                    data={attacksData}
                    scrollAnimationDuration={500}
                    renderItem={({index}) => <AttackCard index={index} data={attacksData[index]}
                                                         modalEdit={{modalEditState, setModalEditState}}/>}
                />

                {attacksData.length === 0 && (
                    <Text style={styles.empty}>Nenhum ataque...</Text>
                )}

                <View style={styles.containerCreateAttack}>
                    <TouchableOpacity
                        activeOpacity={0.88}
                        style={styles.buttonCreateAttack}
                        onPress={() => setModalEditState({visible: true, action: 'create'})}
                    >
                        <Text style={styles.textCreateAttack}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <EditAttack modalState={modalEditState} setModalState={setModalEditState}/>
        </SafeAreaView>
    );
}
