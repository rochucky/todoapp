import { StyleSheet } from "react-native";
import Colors from "../../../utils/colors";
import { Appearance } from "react-native";

const theme = Appearance.getColorScheme();

const styles = StyleSheet.create({
  container: {
    flex: 0,
    width: "100%",
    padding: 10,
    backgroundColor: Colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: Colors.text,
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default styles;
