import { useState, useEffect } from "react";
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
import { useSelector, useDispatch } from "react-redux";
import { loading } from "../../../utils/Loading";
import {
  getDefense,
  updateDefense,
  deleteDefense,
} from "../../../services/api/Defense";

import Colors from "../../../assets/Colors";

import { styles } from "./styles";

import { Header } from "../../../components/Header";
import { WheelPicker } from "../../../components/WheelPicker";
import { ImageView } from "../../../components/ImageView";

import Delete from "../../../assets/Icons/delete.png";
import Save from "../../../assets/Icons/save.png";

import { ATRIBUTES } from "../../../constants";

export function Armor() {
  const dispatch = useDispatch();
  const { characterSelected } = useSelector((store) => store.user);
  const defense = useSelector((store) => store.armor);

  useEffect(() => {
    if (characterSelected) {
      pullDefense();
    }
  }, [characterSelected]);

  // Hooks

  const [slot1Name, setSlot1Name] = useState(defense.slot1_name);
  const [slot1Defense, setSlot1Defense] = useState(
    defense.slot1_defense?.toString()
  );
  const [slot1Penalty, setSlot1Penalty] = useState(
    defense.slot1_penalty?.toString()
  );

  const [slot2Name, setSlot2Name] = useState(defense.slot2_name);
  const [slot2Defense, setSlot2Defense] = useState(
    defense.slot2_defense?.toString()
  );
  const [slot2Penalty, setSlot2Penalty] = useState(
    defense.slot1_penalty?.toString()
  );

  const [useAttribute, setUseAttribute] = useState(defense.use_attribute);

  const [attriburePicker, setAttributePicker] = useState({
    value: defense.defense_attribute,
    visible: false,
  });

  const [others, setOthers] = useState(defense.others?.toString());

  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => setKeyboardVisible(true)
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => setKeyboardVisible(false)
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  const pullDefense = async () => {
    const result = await getDefense(characterSelected);
    
    if (result && result !== "error") {
      setSlot1Name(result.slot1_name);
      setSlot1Defense(result.slot1_defense.toString());
      setSlot1Penalty(result.slot1_penalty.toString());
      setSlot2Name(result.slot2_name);
      setSlot2Defense(result.slot2_defense.toString());
      setSlot2Penalty(result.slot2_penalty.toString());
      setUseAttribute(result.use_attribute);
      setAttributePicker({ value: result.defense_attribute, visible: false });
      setOthers(result.others.toString());
    }
  };

  const handleUpdateDefense = async () => {
    loading(dispatch, { active: true, label: "Enviando dados..." });

    if (
      slot1Name &&
      slot1Defense &&
      slot1Penalty &&
      slot2Name &&
      slot2Defense &&
      slot2Penalty &&
      useAttribute &&
      attriburePicker.value &&
      others
    ) {
      await updateDefense(characterSelected, {
        slot1_name: slot1Name,
        slot1_defense: Number(slot1Defense),
        slot1_penalty: Number(slot1Penalty),
        slot2_name: slot2Name,
        slot2_defense: Number(slot2Defense),
        slot2_penalty: Number(slot2Penalty),
        use_attribute: useAttribute,
        defense_attribure: attriburePicker.value,
        others: Number(others),
      });

      loading(dispatch, { active: false, label: "", delay: 2000 });
    }

    return loading(dispatch, { active: false, label: "", delay: 2000 });
  };

  const handleDeleteDefense = async () => {
    loading(dispatch, { active: true, label: "Enviando dados..." });

    await deleteDefense(characterSelected);

    loading(dispatch, { active: false, label: "", delay: 2000 });
  };

  return (
    <SafeAreaView edges={["right", "top", "left"]} style={{ flex: 1 }}>
      <KeyboardAvoidingView behavior="height" style={{ flex: 1 }}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <Header title="Armadura" />

            <View
              style={[
                styles.containerContent,
                { top: isKeyboardVisible ? 10 : -20 },
              ]}
            >
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
                      <Text style={styles.textArmorBonus}>
                        {slot1Defense ? slot1Defense : 0}
                      </Text>
                    </View>
                  </View>
                </View>

                <View style={styles.containerShieldBonus}>
                  <Text style={styles.shieldBonusLabel}>Bônus de Escudo</Text>

                  <View style={styles.boxOperator}>
                    <Text style={styles.operator}>+</Text>

                    <View style={styles.boxShieldBonus}>
                      <Text style={styles.textShieldBonus}>
                        {slot2Defense ? slot2Defense : 0}
                      </Text>
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

            <View
              style={[
                styles.containerUpdateButtons,
                { display: isKeyboardVisible ? "none" : "flex" },
              ]}
            >
              <TouchableOpacity
                activeOpacity={0.9}
                style={[styles.buttonUpdate, { backgroundColor: Colors.red }]}
                onPress={handleDeleteDefense}
              >
                <ImageView image={Delete} width={20} />
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.9}
                style={[styles.buttonUpdate, { backgroundColor: Colors.green }]}
                onPress={handleUpdateDefense}
              >
                <ImageView image={Save} width={20} />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
