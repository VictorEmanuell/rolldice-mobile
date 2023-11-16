import { useState } from "react";
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
  // Hooks

  const [slot1Name, setSlot1Name] = useState("");
  const [slot1Defense, setSlot1Defense] = useState('0');
  const [slot1Penalty, setSlot1Penalty] = useState('0');

  const [slot2Name, setSlot2Name] = useState("");
  const [slot2Defense, setSlot2Defense] = useState('0');
  const [slot2Penalty, setSlot2Penalty] = useState('0');

  const [useAttribute, setUseAttribute] = useState(false);

  const [attriburePicker, setAttributePicker] = useState({
    value: "DES",
    visible: false,
  });

  const [others, setOthers] = useState();

  return (
    <SafeAreaView edges={['right', 'top', 'left']} style={{ flex: 1 }}>
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
                      placeholder="Armadura"
                      placeholderTextColor="#cccccc80"
                      value={slot1Name}
                      onChangeText={setSlot1Name}
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
                      placeholder="0"
                      value={slot1Defense}
                      onChangeText={setSlot1Defense}
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
                      placeholder="0"
                      value={slot1Penalty}
                      onChangeText={setSlot1Penalty}
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
                      placeholder="Escudo"
                      placeholderTextColor="#cccccc80"
                      value={slot2Name}
                      onChangeText={setSlot2Name}
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
                      placeholder="0"
                      value={slot2Defense}
                      onChangeText={setSlot2Defense}
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
                      placeholder="0"
                      value={slot2Penalty}
                      onChangeText={setSlot2Penalty}
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
                      <Text style={styles.textArmorBonus}>{slot1Defense}</Text>
                    </View>
                  </View>
                </View>

                <View style={styles.containerShieldBonus}>
                  <Text style={styles.shieldBonusLabel}>Bônus de Escudo</Text>

                  <View style={styles.boxOperator}>
                    <Text style={styles.operator}>+</Text>

                    <View style={styles.boxShieldBonus}>
                      <Text style={styles.textShieldBonus}>{slot2Defense}</Text>
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
                      placeholder="0"
                      value={others}
                      onChangeText={setOthers}
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
