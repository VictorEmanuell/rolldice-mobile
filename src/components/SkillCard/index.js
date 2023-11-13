import { useRef, useState } from "react";
import { View, Text, TouchableOpacity, Modal } from "react-native";
import Colors from "../../assets/Colors";

import { styles } from "./styles";

import { ImageView } from "../ImageView";
import { WheelPicker } from "../WheelPicker";

import Dice from "../../assets/Icons/dice.png";

const ATRIBUTES = ["DES", "CON", "INT", "FOR", "SAB", "CAR"];
const OTHERS = [];

for (let i = 0; i < 51; i++) {
  OTHERS.push(i);
}

export function SkillCard({ item: skill }) {
  const [trained, setTrained] = useState(skill.trained);

  const [attriburePicker, setAttributePicker] = useState({
    value: "DES",
    visible: false,
  });
  
  const [othersPicker, setOthersPicker] = useState({
    value: 1,
    visible: false,
  });

  // console.log(
  //   `\nAtributo:\n${attriburePicker.value}\nOutros:\n${othersPicker.value}\n`
  // );

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
            onPress={() => setTrained(!trained)}
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
              <Text style={styles.textItemValue}>1</Text>
            </View>
          </View>

          <Text style={styles.textOperators}>=</Text>

          <View style={styles.containerItem}>
            <Text style={styles.textItem}>Atributo</Text>

            <TouchableOpacity
              activeOpacity={0.8}
              style={[styles.boxItemValue, { backgroundColor: "white" }]}
              onPress={() =>
                setAttributePicker({
                  value: attriburePicker.value,
                  visible: true,
                })
              }
            >
              <Text style={[styles.textItemValue, { color: Colors.primary }]}>
                {attriburePicker.value}
              </Text>
            </TouchableOpacity>
          </View>
          <WheelPicker
            picker={attriburePicker}
            setPicker={setAttributePicker}
            data={ATRIBUTES}
          />

          <Text style={styles.textOperators}>+</Text>

          <View style={styles.containerItem}>
            <Text style={styles.textItem}>Treino</Text>

            <View style={styles.boxItemValue}>
              <Text style={styles.textItemValue}>1</Text>
            </View>
          </View>

          <Text style={styles.textOperators}>+</Text>

          <View style={styles.containerItem}>
            <Text style={styles.textItem}>Outros</Text>

            <TouchableOpacity
              activeOpacity={0.8}
              style={[styles.boxItemValue, { backgroundColor: "white" }]}
              onPress={() =>
                setOthersPicker({ value: othersPicker.value, visible: true })
              }
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
    </View>
  );
}
