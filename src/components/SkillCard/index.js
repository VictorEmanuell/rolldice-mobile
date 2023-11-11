import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Colors from "../../assets/Colors";

import { styles } from "./styles";

import { ImageView } from "../ImageView";

import Dice from "../../assets/Icons/dice.png";

export function SkillCard({ item: skill }) {
  const [trained, setTrained] = useState(skill.trained);

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

            <View style={styles.boxItemValue}>
              <Text style={styles.textItemValue}>DES</Text>
            </View>
          </View>

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

            <View style={[styles.boxItemValue, { backgroundColor: "white" }]}>
              <Text style={[styles.textItemValue, { color: Colors.primary }]}>
                1
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
