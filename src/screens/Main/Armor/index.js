import React, { useState } from "react";
import {
  Keyboard,
  TouchableWithoutFeedback,
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Colors from "../../../assets/Colors";

import { styles } from "./styles";

import { Header } from "../../../components/Header";
import { WheelPicker } from "../../../components/WheelPicker";

import { ATRIBUTES } from "../../../constants";

export function Armor() {
  const [useAttribute, setUseAttribute] = useState(false);

  const [attriburePicker, setAttributePicker] = useState({
    value: "DES",
    visible: false,
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView behavior="height" style={{ flex: 1 }}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <Header title="Armadura" />

            <View style={styles.containerContent}>
              <View style={styles.containerInputsSheet}>
                <View style={styles.containerSlot}>
                  <View style={styles.containerName}>
                    <Text style={styles.nameLabel}>Nome</Text>

                    <TextInput
                      cursorColor={Colors.background}
                      style={styles.nameInput}
                      numberOfLines={1}
                      textContentType="name"
                      maxLength={14}
                    />
                  </View>

                  <View style={styles.containerDefense}>
                    <Text style={styles.defenseLabel}>Defesa</Text>

                    <TextInput
                      cursorColor={Colors.background}
                      style={styles.defenseInput}
                      numberOfLines={1}
                      maxLength={3}
                      keyboardType="numeric"
                    />
                  </View>

                  <View style={styles.containerPenalty}>
                    <Text style={styles.penaltyLabel}>Penalidade</Text>

                    <TextInput
                      cursorColor={Colors.background}
                      style={styles.penaltyInput}
                      numberOfLines={1}
                      maxLength={3}
                      keyboardType="numeric"
                    />
                  </View>
                </View>

                <View style={styles.divider} />

                <View style={styles.containerSlot}>
                  <View style={styles.containerName}>
                    <Text style={styles.nameLabel}>Nome</Text>

                    <TextInput
                      cursorColor={Colors.background}
                      style={styles.nameInput}
                      numberOfLines={1}
                      textContentType="name"
                      maxLength={14}
                    />
                  </View>

                  <View style={styles.containerDefense}>
                    <Text style={styles.defenseLabel}>Defesa</Text>

                    <TextInput
                      cursorColor={Colors.background}
                      style={styles.defenseInput}
                      numberOfLines={1}
                      maxLength={3}
                      keyboardType="numeric"
                    />
                  </View>

                  <View style={styles.containerPenalty}>
                    <Text style={styles.penaltyLabel}>Penalidade</Text>

                    <TextInput
                      cursorColor={Colors.background}
                      style={styles.penaltyInput}
                      numberOfLines={1}
                      maxLength={3}
                      keyboardType="numeric"
                    />
                  </View>
                </View>

                <View style={styles.divider} />
              </View>

              <View style={styles.containerAttributeSheet}>
                <View style={styles.attributePicker}>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.buttonAttributePicker}
                    onPress={() => {
                      setAttributePicker({
                        value: attriburePicker.value,
                        visible: true,
                      });
                      setUseAttribute(true);
                    }}
                  >
                    <Text style={styles.textAttributePicker}>
                      {attriburePicker.value}
                    </Text>
                  </TouchableOpacity>
                  <WheelPicker
                    data={ATRIBUTES}
                    picker={attriburePicker}
                    setPicker={setAttributePicker}
                  />

                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={[
                      styles.buttonUseAttribute,
                      {
                        backgroundColor: useAttribute
                          ? Colors.primary
                          : "white",
                      },
                    ]}
                    onPress={() => setUseAttribute(!useAttribute)}
                  >
                    <Text
                      style={[
                        styles.textAttributePicker,
                        { color: useAttribute ? "white" : Colors.background },
                      ]}
                    >
                      {useAttribute ? "SIM" : "NÃO"}
                    </Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.containerArmorBonus}>
                  <Text style={styles.armorBonusLabel}>Bônus de Armadura</Text>

                  <View style={styles.boxOperator}>
                    <Text style={styles.operator}>+</Text>

                    <View style={styles.boxArmorBonus}>
                      <Text style={styles.textArmorBonus}>5</Text>
                    </View>
                  </View>
                </View>

                <View style={styles.containerShieldBonus}>
                  <Text style={styles.shieldBonusLabel}>Bônus de Escudo</Text>

                  <View style={styles.boxOperator}>
                    <Text style={styles.operator}>+</Text>

                    <View style={styles.boxShieldBonus}>
                      <Text style={styles.textShieldBonus}>5</Text>
                    </View>
                  </View>
                </View>

                <View style={styles.containerOthers}>
                  <Text style={styles.othersLabel}>Outros</Text>

                  <View style={styles.boxOperator}>
                    <Text style={styles.operator}>+</Text>

                    <TextInput
                      cursorColor={Colors.background}
                      style={styles.inputOthers}
                      keyboardType="numeric"
                      numberOfLines={1}
                      maxLength={3}
                      editable={useAttribute}
                    />

                    <Text style={styles.fixedBonus}>+ 10</Text>
                  </View>
                </View>
              </View>

              <Text style={styles.operatorResult}>=</Text>

              <View style={styles.boxResult}>
                <Text style={styles.textResult}>18</Text>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
