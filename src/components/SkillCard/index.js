import { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useDispatch, useSelector } from "react-redux";
import { loading } from "../../utils/Loading";
import { updateCharacterSkill } from "../../store/Character/thunks";
import { setRolling } from "../../store/RollingDice/actions";
import * as Haptics from 'expo-haptics';

import Colors from "../../assets/Colors";

import { styles } from "./styles";

import { ImageView } from "../ImageView";
import { WheelPicker } from "../WheelPicker";

import Dice from "../../assets/Icons/dice.png";
import Save from "../../assets/Icons/save.png";

import { ATTRIBUTES } from "../../constants";
import { attributeKey } from "../../utils/Attributes";

const OTHERS = [];

for (let i = -50; i < 51; i++) {
  OTHERS.push(i);
}

export function SkillCard({ item: skill, index }) {
  const dispatch = useDispatch();
  const characterId = useSelector((store) => store.character.id);
  const { attributes, armor, level } = useSelector((store) => store.character);

  useEffect(() => {
    setTrained(skill.modifier?.trained);
    setAttributePicker({
      value: skill.modifier?.character_attribute,
      visible: false,
    });
    setOthersPicker({
      value: skill.modifier?.others,
      visible: false,
    });
  }, [skill]);

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

  const handleSaveChanges = () => {
    Haptics.impactAsync("light");
    const data = {
      trained: trained,
      character_attribute: attriburePicker.value,
      others: Number(othersPicker.value),
    };

    dispatch(
      updateCharacterSkill({ characterId, skillId: skill.id, data, dispatch })
    );

    saveChangesOut();
  };

  const handleDeleteDefense = async () => {
    loading(dispatch, { active: true, label: "Enviando dados..." });

    // await deleteDefense(characterSelected);
    // dispatch(resetDefense());

    loading(dispatch, { active: false, label: "", delay: 2000 });
  };

  const penalty = () => {
    if (skill.penalty && armor) {
      return armor.slot1_penalty + armor.slot2_penalty;
    } else {
      return 0;
    }
  };

  const totalSum = () => {
    return (
      attributes[attributeKey(attriburePicker.value)] +
      (trained ? 2 : 0) +
      othersPicker.value +
      Math.trunc(level / 2) -
      penalty()
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Text style={styles.textHeader}>
          {skill.name +
            (skill.penalty ? "+" : "") +
            (skill.training ? "*" : "")}
        </Text>

        <TouchableOpacity
          activeOpacity={0.88}
          onPress={() => {
            Haptics.notificationAsync("warning");
            dispatch(
              setRolling({
                rolling: true,
                payload: { type: "skill", skillId: skill.id },
              })
            )
          }}
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
              <Text style={styles.textItemValue}>{totalSum()}</Text>
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
          onPress={handleSaveChanges}
        >
          <ImageView image={Save} width={16} />
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}
