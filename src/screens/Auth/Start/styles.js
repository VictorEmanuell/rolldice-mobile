import { StyleSheet } from "react-native";
import Colors from "../../../assets/Colors";
import Fonts from "../../../assets/Fonts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topBox: {
    backgroundColor: Colors.primary,
    width: "100%",
    height: "50%",
    alignItems: "center",
    justifyContent: "center",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  image: {
    aspectRatio: 1,
    width: 150,
  },
  textTitle: {
    fontFamily: Fonts.header,
    fontSize: 30,
    color: "white",
    paddingVertical: 20,
  },
  buttonsBox: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  bottomBox: {
    backgroundColor: Colors.primary,
    width: "100%",
    height: "20%",
    bottom: 0,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
});
