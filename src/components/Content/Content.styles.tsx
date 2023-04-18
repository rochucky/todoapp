import { StyleSheet } from "react-native";
import Colors from "../../../utils/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    color: Colors.text,
    alignItems: "center",
    paddingTop: 10,
    width: "100%",
    height: "100%",
  },
  addItemView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    padding: 10,
    backgroundColor: Colors.background,
    color: Colors.text,
  },
  addItemText: {
    borderBottomColor: Colors.text,
    borderBottomWidth: 0.2,
    margin: 10,
    padding: 6,
  },
  todoItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    height: 50,
    padding: 10,
    backgroundColor: Colors.background,
    color: Colors.text,
    borderTopColor: Colors.text,
    borderTopWidth: 0.2,
    gap: 10,
    checked: {
      backgroundColor: Colors.backgroundOpacity,
    },
    first: {
      borderTopWidth: 0,
    },
  },
  checkbox: {
    color: Colors.primary,
  },
  text: {
    flex: 1,
    color: Colors.text,
  },
  textInput: {
    flex: 1,
    color: Colors.text,
  },
});

export default styles;
