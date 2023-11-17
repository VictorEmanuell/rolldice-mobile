import { View, Text, TouchableOpacity } from "react-native";

import { styles } from "./styles";

import { ImageView } from "../ImageView";

import Dice from "../../assets/Icons/dice.png";

export function AttackCard({ index }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View style={styles.container}>
        <View style={styles.containerHeader}>
          <Text style={styles.textHeader}>Machadada Braba</Text>

          <TouchableOpacity
            activeOpacity={0.88}
            onPress={() => ""}
            style={styles.diceButton}
          >
            <ImageView image={Dice} width={24} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
