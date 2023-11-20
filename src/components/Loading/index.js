import { View, Modal, ActivityIndicator, Text } from "react-native";
import { BlurView } from "expo-blur";

import Colors from "../../assets/Colors";
import Fonts from "../../assets/Fonts";

export function Loading({ active, label }) {
  return (
    //<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Modal
      animationType="fade"
      transparent={true}
      statusBarTranslucent={true}
      visible={active}
    >
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <BlurView
          intensity={70}
          tint="dark"
          style={{
            // backgroundColor: Colors.primary,
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <ActivityIndicator
            style={{
              padding: 10,
              backgroundColor: Colors.primary,
              borderRadius: 15,
              elevation: 4,
            }}
            size="large"
            color={Colors.lightPurple}
          />

          <Text
            style={{
              fontFamily: Fonts.header,
              fontSize: 15,
              color: "white",
              padding: 8,
            }}
          >
            {label}
          </Text>
        </BlurView>
      </View>
    </Modal>
    //</View>
  );
}
