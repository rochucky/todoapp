import { StyleSheet } from "react-native";
import Colors from "../../../utils/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    color: Colors.text,
    alignItems: "center",
    padding: 10,
    width: "100%",
    height: "100%",
  },
  text: {
    color: Colors.text,
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
});

export default styles;
