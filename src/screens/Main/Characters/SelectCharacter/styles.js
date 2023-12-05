import { StyleSheet } from "react-native";
import Fonts from "../../../../assets/Fonts";
import Colors from "../../../../assets/Colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textTitle: {
    fontFamily: Fonts.medium,
    fontSize: 15,
    textAlign: "center",
    color: "white",
    paddingVertical: 20,
  },
  flatList: {
    width: "100%",
    gap: 15,
    paddingBottom: "25%",
  },
  buttonCreateCharacter: {
    backgroundColor: Colors.primary,
    borderRadius: 5,
    padding: 12,
    alignItems: "center",
    justifyContent: "center",
    width: "85%",
    alignSelf: "center",
    position: 'absolute',
    bottom: 58,
    elevation: 4
  },
  textCreateCharacter: {
    fontFamily: Fonts.bold,
    fontSize: 15,
    color: "white",
    textAlign: "center",
  },
  buttonLogout: {
    backgroundColor: Colors.red,
    borderRadius: 5,
    padding: 8,
    alignItems: "center",
    justifyContent: "center",
    width: "85%",
    alignSelf: "center",
    position: 'absolute',
    bottom: 10,
    elevation: 4
  },
  textLogout: {
    fontFamily: Fonts.bold,
    fontSize: 15,
    color: "white",
    textAlign: "center",
  },
});
