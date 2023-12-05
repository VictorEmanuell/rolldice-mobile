import {StyleSheet} from "react-native";
import Fonts from "../../../../assets/Fonts";
import Colors from "../../../../assets/Colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  containerContent: {
    paddingTop: 5,
    paddingBottom: 50,
  },
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: "white",
    marginTop: 12,
    elevation: 2,
    borderRadius: 50,
  },
  labelClassPicker: {
    fontFamily: Fonts.medium,
    fontSize: 16,
    color: "white",
    paddingVertical: 5,
  },
  buttonClassPicker: {
    backgroundColor: Colors.primary,
    borderRadius: 5,
    padding: 8,
    paddingVertical: 11,
  },
  textClassPicker: {
    fontFamily: Fonts.regular,
    color: "white",
  },
  containerGridAttributes: {
    width: "100%",
  },
  headerGridAttributes: {
    backgroundColor: Colors.primary,
    marginTop: 15,
    alignItems: "center",
    justifyContent: "center",
    padding: 2,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  textHeaderAttributes: {
    fontFamily: Fonts.medium,
    fontSize: 15,
    color: "white",
  },
  contentGridAttributes: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: Colors.secondary,
    padding: 10,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  boxAttribute: {
    alignItems: "center",
    marginHorizontal: 20,
    marginBottom: 15
  },
  labelAttribute: {
    fontFamily: Fonts.regular,
    fontSize: 15,
    color: "white",
  },
  inputAttribute: {
    borderRadius: 5,
    backgroundColor: Colors.primary,
    padding: 6,
    aspectRatio: 1.2,
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
    fontFamily: Fonts.regular,
    fontSize: 15,
    color: "white",
    textAlign: 'center'
  },
  containerUpdateButtons: {
    width: '85%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 10
  },
  buttonUpdate: {
    width: '48%',
    padding: 14,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4
  }
});
