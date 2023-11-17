import { useState } from "react";
import {
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { styles } from "./styles";

import { InputText } from "../../../../components/InputText";
import { WheelPicker } from "../../../../components/WheelPicker";
import { ImageView } from "../../../../components/ImageView";

import Save from "../../../../assets/Icons/save.png";
import Delete from "../../../../assets/Icons/delete.png";

import { CLASSES } from "../../../../constants";
import Colors from "../../../../assets/Colors";

export function EditCharacter({ route }) {
  const { id, name, className } = route.params;

  const [classPicker, setClassPicker] = useState({
    value: className,
    visible: false,
  });

  return (
    <KeyboardAvoidingView behavior="height" style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <KeyboardAwareScrollView
            style={{ width: "85%" }}
            contentContainerStyle={styles.containerContent}
            showsVerticalScrollIndicator={false}
            enableOnAndroid={true}
          >
            <InputText
              label="Nome"
              placeholder="Nome do personagem..."
              containerStyle={{ width: "100%" }}
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
                  />
                </View>
              </View>
            </View>
          </KeyboardAwareScrollView>

          <View style={styles.containerUpdateButtons}>
            <TouchableOpacity
              activeOpacity={0.9}
              style={[styles.buttonUpdate, { backgroundColor: Colors.red }]}
            >
              <ImageView image={Delete} width={20} />
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.9}
              style={[styles.buttonUpdate, { backgroundColor: Colors.green }]}
            >
              <ImageView image={Save} width={20} />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
