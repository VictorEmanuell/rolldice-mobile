import { StyleSheet } from "react-native";
import Colors from "../../../assets/Colors";
import Fonts from "../../../assets/Fonts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  containerCreateAttack: {
    width: "85%",
  },
  buttonCreateAttack: {
    backgroundColor: Colors.primary,
    padding: 6,
    borderRadius: 5,
    alignSelf: "flex-end",
    aspectRatio: 1,
    elevation: 4
  },
  textCreateAttack: {
    fontFamily: Fonts.regular,
    fontSize: 22,
    color: "white",
    textAlign: "center",
    bottom: -2
  },
});
