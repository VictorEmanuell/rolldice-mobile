import { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { useDispatch, useSelector } from "react-redux";
import { loading } from "../../utils/Loading";

import Colors from "../../assets/Colors";

import { styles } from "./styles";

import { ImageView } from "../ImageView";
import { WheelPicker } from "../WheelPicker";

import Dice from "../../assets/Icons/dice.png";
import Save from "../../assets/Icons/save.png";

import { ATTRIBUTES } from "../../constants";

const OTHERS = [];

import { attributeKey } from "../../utils/Attributes";

for (let i = -50; i < 51; i++) {
  OTHERS.push(i);
}

export function SkillCard({ item: skill }) {
  const dispatch = useDispatch();
  const { attributes } = useSelector((store) => store.character);

  // Hooks

  const [trained, setTrained] = useState(skill.modifier?.trained);

  const [attriburePicker, setAttributePicker] = useState({
    value: skill.modifier?.character_attribute ?? "DES",
    visible: false,
  });

  const [othersPicker, setOthersPicker] = useState({
    value: skill.modifier?.others ?? 0,
    visible: false,
  });

  // Animations

  const saveChangesPosition = useSharedValue(-35);
  const saveChangesHeight = useSharedValue(0);
  const saveChangesPadding = useSharedValue(0);
  const saveChangesPaddingTop = useSharedValue(0);

  const saveChangesIn = () => {
    saveChangesPosition.value = withTiming(-5, { duration: 300 });
    saveChangesHeight.value = withTiming(34, { duration: 300 });
    saveChangesPadding.value = withTiming(8, { duration: 300 });
    saveChangesPaddingTop.value = withTiming(10, { duration: 300 });
  };

  const saveChangesOut = () => {
    saveChangesPosition.value = withTiming(-35, { duration: 300 });
    saveChangesHeight.value = withTiming(0, { duration: 300 });
    saveChangesPadding.value = withTiming(0, { duration: 300 });
    saveChangesPaddingTop.value = withTiming(0, { duration: 300 });
  };

  const saveChanges = () => {
    loading(dispatch, { active: true, label: "Salvando..." });

    console.log({
      skill_id: skill.skill_id,
      name: skill.name,
      training: 1,
      trained,
      attribure: attriburePicker.value,
      others: othersPicker.value,
    });

    loading(dispatch, { active: true, delay: 2000 });
    saveChangesOut();
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Text style={styles.textHeader}>{skill.name}</Text>

        <TouchableOpacity
          activeOpacity={0.88}
          onPress={() => ""}
          style={styles.diceButton}
        >
          <ImageView image={Dice} width={24} />
        </TouchableOpacity>
      </View>

      <View style={styles.conatinerBody}>
        <View style={styles.containerRadioButton}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              aspectRatio: 1,
              padding: 4,
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => {
              setTrained(!trained);
              saveChangesIn();
            }}
          >
            <View
              style={{
                padding: 8,
                backgroundColor: "white",
                borderRadius: 100,
                borderWidth: 2,
                borderColor: trained ? Colors.primary : "gray",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {trained && (
                <View
                  style={{
                    backgroundColor: Colors.primary,
                    padding: 6.5,
                    borderRadius: 100,
                    position: "absolute",
                  }}
                />
              )}
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.containerItems}>
          <View style={styles.containerItem}>
            <Text style={styles.textItem}>Total</Text>

            <View style={styles.boxItemValue}>
              <Text style={styles.textItemValue}>
                {attributes[attributeKey(attriburePicker.value)] +
                  (trained ? 2 : 0) +
                  othersPicker.value}
              </Text>
            </View>
          </View>

          <Text style={styles.textOperators}>=</Text>

          <View style={styles.containerItem}>
            <Text style={styles.textItem}>Atributo</Text>

            <TouchableOpacity
              activeOpacity={0.8}
              style={[styles.boxItemValue, { backgroundColor: "white" }]}
              onPress={() => {
                setAttributePicker({
                  value: attriburePicker.value,
                  visible: true,
                });
                saveChangesIn();
              }}
            >
              <Text style={[styles.textItemValue, { color: Colors.primary }]}>
                {attriburePicker.value}
              </Text>
            </TouchableOpacity>
          </View>
          <WheelPicker
            picker={attriburePicker}
            setPicker={setAttributePicker}
            data={ATTRIBUTES}
          />

          <Text style={styles.textOperators}>+</Text>

          <View style={styles.containerItem}>
            <Text style={styles.textItem}>Treino</Text>

            <View style={styles.boxItemValue}>
              <Text style={styles.textItemValue}>{trained ? 2 : 0}</Text>
            </View>
          </View>

          <Text style={styles.textOperators}>+</Text>

          <View style={styles.containerItem}>
            <Text style={styles.textItem}>Outros</Text>

            <TouchableOpacity
              activeOpacity={0.8}
              style={[styles.boxItemValue, { backgroundColor: "white" }]}
              onPress={() => {
                setOthersPicker({ value: othersPicker.value, visible: true });
                saveChangesIn();
              }}
            >
              <Text style={[styles.textItemValue, { color: Colors.primary }]}>
                {othersPicker.value}
              </Text>
            </TouchableOpacity>
          </View>
          <WheelPicker
            picker={othersPicker}
            setPicker={setOthersPicker}
            data={OTHERS}
          />
        </View>
      </View>

      <Animated.View
        style={[
          {
            width: "100%",
            backgroundColor: Colors.green,
            borderBottomLeftRadius: 5,
            borderBottomRightRadius: 5,
            zIndex: -1,
          },
          useAnimatedStyle(() => {
            "worklet";
            return {
              transform: [{ translateY: saveChangesPosition.value }],
              height: saveChangesHeight.value,
              padding: saveChangesPadding.value,
              paddingTop: saveChangesPaddingTop.value,
            };
          }),
        ]}
      >
        <TouchableOpacity
          activeOpacity={0.8}
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          onPress={() => saveChanges()}
        >
          <ImageView image={Save} width={16} />
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}
