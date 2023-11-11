import { StyleSheet } from "react-native";
import Colors from "../../assets/Colors";
import Fonts from "../../assets/Fonts";

export const styles = StyleSheet.create({
  container: {
    width: "85%",
    alignSelf: "center",
  },
  containerHeader: {
    backgroundColor: Colors.primary,
    width: "100%",
    padding: 4,
    flexDirection: "row",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    alignItems: "center",
    justifyContent: "space-between",
  },
  textHeader: {
    fontFamily: Fonts.medium,
    fontSize: 14,
    color: "white",
    marginHorizontal: 5,
  },
  diceButton: {
    marginRight: 5,
    flex: 1,
    alignItems: "flex-end",
  },
  conatinerBody: {
    flexDirection: "row",
    backgroundColor: Colors.secondary,
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  containerRadioButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  containerItems: {
    flex: 1,
    paddingHorizontal: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  containerItem: {
    alignItems: "center",
    gap: 4,
  },
  textItem: {
    fontFamily: Fonts.regularItalic,
    fontSize: 13,
    color: "white",
  },
  boxItemValue: {
    width: "100%",
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  textItemValue: {
    fontFamily: Fonts.medium,
    fontSize: 12,
    color: "white",
  },
  textOperators: {
    fontFamily: Fonts.medium,
    fontSize: 15,
    color: "white",
    alignSelf: "flex-end",
    height: 20,
  },
});
