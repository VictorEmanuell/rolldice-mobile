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
    justifyContent: "center",
  },
  containerInputsSheet: {
    width: "85%",
  },
  containerSlot: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: "white",
  },
  containerName: {
    width: "48%",
  },
  nameLabel: {
    fontFamily: Fonts.medium,
    fontSize: 14,
    color: "white",
  },
  nameInput: {
    width: "100%",
    backgroundColor: "white",
    padding: 5,
    borderRadius: 5,
    elevation: 2,
    textAlign: "center",
    fontFamily: Fonts.regular,
    fontSize: 16,
    color: Colors.background,
  },
  containerDefense: {
    alignItems: "center",
  },
  defenseLabel: {
    fontFamily: Fonts.medium,
    fontSize: 14,
    color: "white",
  },
  defenseInput: {
    width: "100%",
    backgroundColor: "white",
    padding: 5,
    borderRadius: 5,
    elevation: 2,
    textAlign: "center",
    fontFamily: Fonts.regular,
    fontSize: 16,
    color: Colors.background,
  },
  containerPenalty: {
    alignItems: "center",
  },
  penaltyLabel: {
    fontFamily: Fonts.medium,
    fontSize: 14,
    color: "white",
  },
  penaltyInput: {
    width: "60%",
    backgroundColor: "white",
    padding: 5,
    borderRadius: 5,
    elevation: 2,
    textAlign: "center",
    fontFamily: Fonts.regular,
    fontSize: 16,
    color: Colors.background,
  },
  containerAttributeSheet: {
    width: "85%",
    flexDirection: "row",
    paddingVertical: 15,
    justifyContent: "space-between",
  },
  attributePicker: {
    alignItems: "center",
    width: "16%",
  },
  buttonAttributePicker: {
    width: "100%",
    padding: 8,
    borderRadius: 5,
    backgroundColor: "white",
    elevation: 2,
    marginBottom: 10,
  },
  buttonUseAttribute: {
    width: "100%",
    padding: 8,
    borderRadius: 5,
    backgroundColor: "white",
    elevation: 2,
  },
  textAttributePicker: {
    fontFamily: Fonts.regular,
    fontSize: 14,
    color: Colors.background,
    textAlign: "center",
  },
  operator: {
    fontFamily: Fonts.medium,
    fontSize: 15,
    color: "white",
    alignSelf: "center",
    left: -12,
  },
  containerArmorBonus: {
    justifyContent: "space-between",
    alignItems: "center",
    width: "25%",
  },
  armorBonusLabel: {
    fontFamily: Fonts.medium,
    fontSize: 14,
    color: "white",
    textAlign: "center",
  },
  boxArmorBonus: {
    padding: 8,
    paddingHorizontal: 14,
    backgroundColor: Colors.primary,
    borderRadius: 5,
  },
  boxOperator: {
    flexDirection: "row",
  },
  textArmorBonus: {
    fontFamily: Fonts.regular,
    fontSize: 14,
    color: "white",
  },
  containerShieldBonus: {
    justifyContent: "space-between",
    alignItems: "center",
    width: "25%",
    left: -10,
  },
  shieldBonusLabel: {
    fontFamily: Fonts.medium,
    fontSize: 14,
    color: "white",
    textAlign: "center",
  },
  boxShieldBonus: {
    padding: 8,
    paddingHorizontal: 14,
    backgroundColor: Colors.primary,
    borderRadius: 5,
  },
  textShieldBonus: {
    fontFamily: Fonts.regular,
    fontSize: 14,
    color: "white",
  },
  containerOthers: {
    justifyContent: "space-between",
    alignItems: "center",
    width: "25%",
  },
  othersLabel: {
    fontFamily: Fonts.medium,
    fontSize: 14,
    color: "white",
    alignSelf: "flex-start",
    paddingVertical: 8,
  },
  inputOthers: {
    padding: 4,
    paddingHorizontal: 10,
    backgroundColor: "white",
    borderRadius: 5,
    fontFamily: Fonts.regular,
    fontSize: 14,
    color: Colors.background,
    textAlign: "center",
  },
  fixedBonus: {
    fontFamily: Fonts.medium,
    fontSize: 15,
    color: "white",
    alignSelf: "center",
    textAlign: "center",
    paddingHorizontal: 8,
  },
  operatorResult: {
    fontFamily: Fonts.medium,
    fontSize: 15,
    color: "white",
    alignSelf: "center",
  },
  boxResult: {
    padding: 8,
    paddingHorizontal: '15%',
    backgroundColor: Colors.primary,
    borderRadius: 5,
    marginTop: 10
  },
  textResult: {
    fontFamily: Fonts.regular,
    fontSize: 14,
    color: "white",
  }
});
