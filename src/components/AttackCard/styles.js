import { StyleSheet } from "react-native";
import Colors from "../../assets/Colors";
import Fonts from "../../assets/Fonts";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#4D3673",
    borderRadius: 5,
    width: "85%",
    height: "95%",
    alignItems: "center",
    elevation: 6,
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
});
