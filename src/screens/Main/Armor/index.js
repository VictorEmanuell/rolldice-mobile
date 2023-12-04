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
import { deleteDefense } from "../../../services/api/Defense";
import { updateCharacterDefense } from "../../../store/Character/thunks";
import { attributeKey } from "../../../utils/Attributes";
import { resetDefense } from "../../../store/Character/actions";

import Colors from "../../../assets/Colors";

import { styles } from "./styles";

import { Header } from "../../../components/Header";
import { WheelPicker } from "../../../components/WheelPicker";
import { ImageView } from "../../../components/ImageView";

import Delete from "../../../assets/Icons/delete.png";
import Save from "../../../assets/Icons/save.png";

import { ATTRIBUTES } from "../../../constants";

export function Armor() {
  const dispatch = useDispatch();
  const { characterSelected } = useSelector((store) => store.user);
  const { armor, attributes } = useSelector((store) => store.character);

  // useEffect(() => {
  //   // reset states

  //   setInputs(inputsInitialState);
  //   setAttributePicker({ value: "DES", visible: false });
  //   setUseAttribute(false);

  //   if (characterSelected) {
  //     pullDefense();
  //   }
  // }, [characterSelected]);

  // console.log(defense);
  // useEffect(() => {
  // }, [defense]);

  useEffect(() => {
    let onlyInputs = Object.assign({}, armor);

    delete onlyInputs.defense_attribute;
    delete onlyInputs.use_attribute;
    delete onlyInputs.character_id;

    setInputs({ ...onlyInputs });
    setAttributePicker({
      value: armor?.defense_attribute ?? "DES",
      visible: false,
    });
    setUseAttribute(armor?.use_attribute);
  }, [armor]);

  // Hooks

  const inputsInitialState = {
    slot1_name: "",
    slot1_defense: null,
    slot1_penalty: null,
    slot2_name: "",
    slot2_defense: null,
    slot2_penalty: null,
    others: null,
  };

  const [inputs, setInputs] = useState(inputsInitialState);
  const [useAttribute, setUseAttribute] = useState(false);
  const [attriburePicker, setAttributePicker] = useState({
    value: "DES",
    visible: false,
  });

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

  const handleUpdateDefense = async () => {
    const data = {
      slot1_name: inputs.slot1_name,
      slot1_defense: Number(inputs.slot1_defense),
      slot1_penalty: Number(inputs.slot1_penalty),
      slot2_name: inputs.slot2_name,
      slot2_defense: Number(inputs.slot2_defense),
      slot2_penalty: Number(inputs.slot2_penalty),
      use_attribute: useAttribute,
      defense_attribure: attriburePicker.value,
      others: Number(inputs.others),
    };

    dispatch(
      updateCharacterDefense({ characterId: characterSelected, data, dispatch })
    );
  };

  const handleDeleteDefense = async () => {
    loading(dispatch, { active: true, label: "Enviando dados..." });

    await deleteDefense(characterSelected);
    dispatch(resetDefense());

    loading(dispatch, { active: false, label: "", delay: 2000 });
  };

  const totalSum = () => {
    return (
      (useAttribute ? attributes[attributeKey(attriburePicker.value)] : 0) +
      Number(inputs.slot1_defense) +
      Number(inputs.slot2_defense) +
      Number(inputs.others) +
      10
    );
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
                      value={inputs.slot1_name}
                      onChangeText={(value) =>
                        setInputs((state) => ({ ...state, slot1_name: value }))
                      }
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
                      value={
                        inputs.slot1_defense ? String(inputs.slot1_defense) : ""
                      }
                      onChangeText={(value) =>
                        setInputs((state) => ({
                          ...state,
                          slot1_defense: value,
                        }))
                      }
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
                      value={
                        inputs.slot1_penalty ? String(inputs.slot1_penalty) : ""
                      }
                      onChangeText={(value) =>
                        setInputs((state) => ({
                          ...state,
                          slot1_penalty: value,
                        }))
                      }
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
                      value={inputs.slot2_name}
                      onChangeText={(value) =>
                        setInputs((state) => ({ ...state, slot2_name: value }))
                      }
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
                      value={
                        inputs.slot2_defense ? String(inputs.slot2_defense) : ""
                      }
                      onChangeText={(value) =>
                        setInputs((state) => ({
                          ...state,
                          slot2_defense: value,
                        }))
                      }
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
                      value={
                        inputs.slot2_penalty ? String(inputs.slot2_penalty) : ""
                      }
                      onChangeText={(value) =>
                        setInputs((state) => ({
                          ...state,
                          slot2_penalty: value,
                        }))
                      }
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
                    data={ATTRIBUTES}
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
                        {inputs.slot1_defense ? inputs.slot1_defense : 0}
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
                        {inputs.slot2_defense ? inputs.slot2_defense : 0}
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
                      value={inputs.others ? String(inputs.others) : ""}
                      onChangeText={(value) =>
                        setInputs((state) => ({ ...state, others: value }))
                      }
                    />

                    <Text style={styles.fixedBonus}>+ 10</Text>
                  </View>
                </View>
              </View>

              <Text style={styles.operatorResult}>=</Text>

              <View style={styles.boxResult}>
                <Text style={styles.textResult}>{totalSum()}</Text>
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
