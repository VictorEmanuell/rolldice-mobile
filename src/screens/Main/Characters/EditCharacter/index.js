import { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  createCharacter,
  deleteCharacter,
  updateCharacter,
} from "../../../../services/api/Character";
import { loading } from "../../../../utils/Loading";
import { useDispatch } from "react-redux";
import { setUserCharacterSelected } from "../../../../store/User/actions";

import { styles } from "./styles";

import { InputText } from "../../../../components/InputText";
import { WheelPicker } from "../../../../components/WheelPicker";
import { ImageView } from "../../../../components/ImageView";

import Save from "../../../../assets/Icons/save.png";
import Delete from "../../../../assets/Icons/delete.png";

import { CLASSES } from "../../../../constants";
import Colors from "../../../../assets/Colors";
import { pullUser } from "../../../../store/User/thunks";
import { setLoading } from "../../../../store/Loading/actions";

export function EditCharacter({ navigation, route }) {
  const dispatch = useDispatch();
  const { action, character } = route.params;

  const [name, setName] = useState(character?.name);
  const [classPicker, setClassPicker] = useState({
    value: character?.character_class ?? "Guerreiro",
    visible: false,
  });
  const [level, setLevel] = useState(character?.level.toString());
  const [strength, setStrength] = useState(character?.strength.toString());
  const [dexterity, setDexterity] = useState(character?.dexterity.toString());
  const [constitution, setConstitution] = useState(
    character?.constitution.toString()
  );
  const [intelligence, setIntelligence] = useState(
    character?.intelligence.toString()
  );
  const [wisdom, setWisdom] = useState(character?.wisdom.toString());
  const [charisma, setCharisma] = useState(character?.charisma.toString());

  const handleUpdateCharacter = async () => {
    if (
      name &&
      classPicker.value &&
      /^(?:[1-9]|0[1-9]|1[0-9]|20)$/.test(level) &&
      strength &&
      dexterity &&
      constitution &&
      intelligence &&
      wisdom &&
      charisma
    ) {
      dispatch(setLoading({ active: true, label: "Enviando dados..." }));

      if (action === "create") {
        await createCharacter({
          name,
          character_class: classPicker.value,
          level: Number(level),
          strength: Number(strength),
          dexterity: Number(dexterity),
          constitution: Number(constitution),
          intelligence: Number(intelligence),
          wisdom: Number(wisdom),
          charisma: Number(charisma),
        });

        dispatch(pullUser({ dispatch }));
        return navigation.goBack();
      }

      if (action === "edit") {
        await updateCharacter(character.id, {
          name,
          character_class: classPicker.value,
          level: Number(level),
          strength: Number(strength),
          dexterity: Number(dexterity),
          constitution: Number(constitution),
          intelligence: Number(intelligence),
          wisdom: Number(wisdom),
          charisma: Number(charisma),
        });

        dispatch(pullUser({ dispatch }));
        return navigation.goBack();
      }

      return loading(dispatch, { active: false, label: "", delay: 2000 });
    } else {
      return ToastAndroid.show("Preencha corretamente!", ToastAndroid.SHORT);
    }
  };

  const handleDeleteCharacter = async () => {
    loading(dispatch, { active: true, label: "Excluindo..." });

    await deleteCharacter(character.id);
    dispatch(setUserCharacterSelected(null));
    dispatch(pullUser({ dispatch }));
    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView behavior="height" style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <KeyboardAwareScrollView
            style={{ width: "85%" }}
            contentContainerStyle={styles.containerContent}
            showsVerticalScrollIndicator={false}
            enableOnAndroid={true}
            extraScrollHeight={-120}
          >
            <InputText
              label="Nome"
              placeholder="Nome do personagem..."
              containerStyle={{ width: "100%" }}
              value={name}
              onChangeText={setName}
            />

            <View style={styles.divider} />

            <View>
              <Text style={styles.labelClassPicker}>Classe</Text>

              <TouchableOpacity
                activeOpacity={0.9}
                style={styles.buttonClassPicker}
                onPress={() =>
                  setClassPicker({ value: classPicker.value, visible: true })
                }
              >
                <Text style={styles.textClassPicker}>{classPicker.value}</Text>
              </TouchableOpacity>
              <WheelPicker
                data={CLASSES}
                picker={classPicker}
                setPicker={setClassPicker}
              />
            </View>

            <View style={styles.divider} />

            <InputText
              label="Nível"
              keyboardType="numeric"
              containerStyle={{ width: "100%" }}
              placeholder="0"
              value={level}
              onChangeText={setLevel}
              validate={/^(?:[1-9]|0[1-9]|1[0-9]|20)$/.test(level)}
            />

            <View style={styles.divider} />

            <View style={styles.containerGridAttributes}>
              <View style={styles.headerGridAttributes}>
                <Text style={styles.textHeaderAttributes}>Atributos</Text>
              </View>

              <View style={styles.contentGridAttributes}>
                <View style={styles.boxAttribute}>
                  <Text style={styles.labelAttribute}>FOR</Text>

                  <TextInput
                    placeholder="0"
                    placeholderTextColor="#cccccc65"
                    cursorColor="#cccccc65"
                    keyboardType="numeric"
                    style={styles.inputAttribute}
                    value={strength}
                    onChangeText={setStrength}
                  />
                </View>

                <View style={styles.boxAttribute}>
                  <Text style={styles.labelAttribute}>DES</Text>

                  <TextInput
                    placeholder="0"
                    placeholderTextColor="#cccccc65"
                    cursorColor="#cccccc65"
                    keyboardType="numeric"
                    style={styles.inputAttribute}
                    value={dexterity}
                    onChangeText={setDexterity}
                  />
                </View>

                <View style={styles.boxAttribute}>
                  <Text style={styles.labelAttribute}>CON</Text>

                  <TextInput
                    placeholder="0"
                    placeholderTextColor="#cccccc65"
                    cursorColor="#cccccc65"
                    keyboardType="numeric"
                    style={styles.inputAttribute}
                    value={constitution}
                    onChangeText={setConstitution}
                  />
                </View>

                <View style={styles.boxAttribute}>
                  <Text style={styles.labelAttribute}>INT</Text>

                  <TextInput
                    placeholder="0"
                    placeholderTextColor="#cccccc65"
                    cursorColor="#cccccc65"
                    keyboardType="numeric"
                    style={styles.inputAttribute}
                    value={intelligence}
                    onChangeText={setIntelligence}
                  />
                </View>

                <View style={styles.boxAttribute}>
                  <Text style={styles.labelAttribute}>SAB</Text>

                  <TextInput
                    placeholder="0"
                    placeholderTextColor="#cccccc65"
                    cursorColor="#cccccc65"
                    keyboardType="numeric"
                    style={styles.inputAttribute}
                    value={wisdom}
                    onChangeText={setWisdom}
                  />
                </View>

                <View style={styles.boxAttribute}>
                  <Text style={styles.labelAttribute}>CAR</Text>

                  <TextInput
                    placeholder="0"
                    placeholderTextColor="#cccccc65"
                    cursorColor="#cccccc65"
                    keyboardType="numeric"
                    style={styles.inputAttribute}
                    value={charisma}
                    onChangeText={setCharisma}
                  />
                </View>
              </View>
            </View>
          </KeyboardAwareScrollView>

          <View style={styles.containerUpdateButtons}>
            <TouchableOpacity
              disabled={action === "create" ? true : false}
              activeOpacity={0.9}
              style={[
                styles.buttonUpdate,
                {
                  backgroundColor: action === "create" ? "#606060" : Colors.red,
                },
              ]}
              onPress={handleDeleteCharacter}
            >
              <ImageView
                image={Delete}
                width={20}
                style={{ opacity: action === "create" ? 0.3 : 1 }}
              />
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.9}
              style={[styles.buttonUpdate, { backgroundColor: Colors.green }]}
              onPress={handleUpdateCharacter}
            >
              <ImageView image={Save} width={20} />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
