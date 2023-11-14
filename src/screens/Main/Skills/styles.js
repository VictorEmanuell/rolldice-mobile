import { StyleSheet } from "react-native";
import Colors from "../../../assets/Colors";
import Fonts from "../../../assets/Fonts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerContent: {
    height: "100%",
    alignItems: "center",
  },
  searchInputContainer: {
    flexDirection: "row",
    backgroundColor: Colors.primary,
    borderRadius: 5,
    width: "85%",
    marginVertical: 20,
    overflow: "hidden",
    alignItems: "center",
    elevation: 8
  },
  searchInputIcon: {
    transform: [{ translateX: 0 }],
    paddingHorizontal: 10,
  },
  searchTextInput: {
    borderRadius: 5,
    padding: 8,
    fontFamily: Fonts.regular,
    color: "white",
    width: "100%",
  },
  flatList: {
    width: "100%",
    gap: 20,
    paddingBottom: '25%'
  },
});
