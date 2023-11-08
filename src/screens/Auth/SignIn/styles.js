import { StyleSheet } from "react-native";
import Fonts from "../../../assets/Fonts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  view: {
    width: 200,
    height: 200,
    backgroundColor: "#ccc",
  },
  text: {
    fontFamily: Fonts.header,
    fontSize: 28,
    color: "white",
  },
});
