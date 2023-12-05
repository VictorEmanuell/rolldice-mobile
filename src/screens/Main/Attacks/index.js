import {useEffect, useState} from 'react';
import {View, Text, Dimensions, TouchableOpacity} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import Carousel from "react-native-reanimated-carousel";
import {useDispatch, useSelector} from 'react-redux';

import {styles} from "./styles";

import {Header} from "../../../components/Header";
import {AttackCard} from "../../../components/AttackCard";

export function Attacks() {
  const dispatch = useDispatch();
  const {attacks} = useSelector(store => store.character);

  const [attacksData, setAttacksData] = useState(attacks);

  useEffect(() => {
    setAttacksData(attacks);
  }, [attacks]);

  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;

  return (
    <SafeAreaView edges={["right", "top", "left"]} style={styles.container}>
      <Header title="Ataques"/>

      <View style={styles.containerContent}>
        <Carousel
          loop
          width={width}
          height={height * 0.68}
          autoPlay={false}
          data={attacksData}
          scrollAnimationDuration={500}
          renderItem={({index}) => <AttackCard index={index} data={attacksData[index]}/>}
        />

        <View style={styles.containerCreateAttack}>
          <TouchableOpacity
            activeOpacity={0.88}
            style={styles.buttonCreateAttack}
          >
            <Text style={styles.textCreateAttack}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
