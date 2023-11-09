import { StyleSheet } from "react-native";
import Fonts from "../../../assets/Fonts";
import Colors from "../../../assets/Colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backContainer: {
    width: "100%",
    height: "8%",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  backButton: {
    paddingHorizontal: 25,
  },
  containerLogo: {
    width: "100%",
    height: "auto",
    alignItems: "center",
    justifyContent: "center",
  },
  textTitle: {
    fontFamily: Fonts.header,
    fontSize: 30,
    color: "white",
  },
  containerInputs: {
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
  containerForgotPassword: {
    width: "80%",
    alignSelf: "center",
  },
  textForgotPassword: {
    fontFamily: Fonts.mediumItalic,
    fontSize: 14,
    color: "white",
    paddingVertical: 6.5,
    alignSelf: "flex-end",
  },
  containerButtonLogin: {
    width: "80%",
    paddingVertical: 40,
    alignSelf: "center",
  },
});
