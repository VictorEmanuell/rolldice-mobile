import {StyleSheet} from "react-native";
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
    justifyContent: 'space-between'
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
  containerData: {
    width: '90%',
    paddingVertical: 8
  },
  containerButtons: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 10
  },
  containerOptions: {
    width: "100%",
    flexDirection: "row",
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    alignItems: "center",
    justifyContent: "space-between",
    overflow: 'hidden'
  },
  editButton: {
    backgroundColor: Colors.primary,
    width: '50%',
    height: '100%',
    alignItems: 'center',
    paddingVertical: 8
  },
  deleteButton: {
    backgroundColor: Colors.red,
    width: '50%',
    height: '100%',
    alignItems: 'center',
    paddingVertical: 8
  }
});
