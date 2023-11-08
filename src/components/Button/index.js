import { TouchableOpacity, Text } from "react-native";

import Colors from "../../assets/Colors";
import Fonts from "../../assets/Fonts";

export function Button({ label, labelSize, width, onPress, style }) {
  return (
    <TouchableOpacity
      activeOpacity={0.88}
      style={{
        backgroundColor: Colors.primary,
        height: 50,
        width: width ? width : "50%",
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        ...style,
      }}
      onPress={onPress}
    >
      <Text
        style={{
          fontFamily: Fonts.medium,
          fontSize: labelSize ? labelSize : 15,
          color: "white",
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}
