import { StyleSheet } from "react-native";
import Colors from "../../../utils/colors";

const styles = StyleSheet.create({
  container: {
    flex: 0,
    width: "100%",
    padding: 10,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default styles;
