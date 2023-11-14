import { useState } from "react";
import {
  View,
  Modal,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import Picker from "react-native-wheel-picker-expo";
import Fonts from "../../assets/Fonts";
import Colors from "../../assets/Colors";

export function WheelPicker({ data, picker, setPicker }) {
  const [valuePicker, setValuePicker] = useState(picker.value);

  return (
    <Modal
      animationType="fade"
      visible={picker.visible}
      transparent={true}
      onRequestClose={() => setPicker({ value: valuePicker, visible: false })}
      statusBarTranslucent={true}
    >
      <TouchableWithoutFeedback
        onPress={() => setPicker({ value: valuePicker, visible: false })}
      >
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#00000050",
          }}
        >
          <View
            style={{
              width: "60%",
              margin: 0,
              backgroundColor: Colors.secondary,
              borderRadius: 16,
              alignItems: "center",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5,
            }}
          >
            <Picker
              haptics={true}
              selectedStyle={{ borderColor: "#CCCCCC", borderWidth: 1 }}
              height={200}
              initialSelectedIndex={data.indexOf(picker.value)}
              items={data.map((item) => ({ label: item, value: item }))}
              onChange={({ item }) => setValuePicker(item.value)}
              renderItem={(props) => (
                <Text
                  style={[
                    { fontFamily: Fonts.regular },
                    {
                      fontSize: props.fontSize,
                      color: props.fontColor,
                      textAlign: props.textAlign,
                    },
                  ]}
                >
                  {props.label}
                </Text>
              )}
              backgroundColor={Colors.secondary}
            />

            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                width: "100%",
                padding: 10,
                borderTopWidth: 0,
                borderTopColor: "#cccccc",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#4B9E76",
                borderBottomLeftRadius: 14,
                borderBottomRightRadius: 14,
              }}
              onPress={() => setPicker({ value: valuePicker, visible: false })}
            >
              <Text
                style={{
                  fontFamily: Fonts.regular,
                  fontSize: 15,
                  color: "white",
                }}
              >
                Ok
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
