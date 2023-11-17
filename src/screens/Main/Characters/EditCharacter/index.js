import { useState } from "react";
import {
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
//import { ScrollView } from "react-native-gesture-handler";

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
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ScrollView
          style={{ width: "85%" }}
          contentContainerStyle={styles.containerContent}
          showsVerticalScrollIndicator={false}
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
                <Text style={styles.labelAttribute}>DES</Text>

                <TouchableOpacity
                  activeOpacity={0.9}
                  style={styles.buttonAttributePicker}
                >
                  <Text style={styles.textAttributePicker}>0</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.boxAttribute}>
                <Text style={styles.labelAttribute}>DES</Text>

                <TouchableOpacity
                  activeOpacity={0.9}
                  style={styles.buttonAttributePicker}
                >
                  <Text style={styles.textAttributePicker}>0</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.boxAttribute}>
                <Text style={styles.labelAttribute}>DES</Text>

                <TouchableOpacity
                  activeOpacity={0.9}
                  style={styles.buttonAttributePicker}
                >
                  <Text style={styles.textAttributePicker}>0</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.boxAttribute}>
                <Text style={styles.labelAttribute}>DES</Text>

                <TouchableOpacity
                  activeOpacity={0.9}
                  style={styles.buttonAttributePicker}
                >
                  <Text style={styles.textAttributePicker}>0</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.boxAttribute}>
                <Text style={styles.labelAttribute}>DES</Text>

                <TouchableOpacity
                  activeOpacity={0.9}
                  style={styles.buttonAttributePicker}
                >
                  <Text style={styles.textAttributePicker}>0</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.boxAttribute}>
                <Text style={styles.labelAttribute}>DES</Text>

                <TouchableOpacity
                  activeOpacity={0.9}
                  style={styles.buttonAttributePicker}
                >
                  <Text style={styles.textAttributePicker}>0</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>

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
  );
}
