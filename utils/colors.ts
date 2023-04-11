import { Appearance } from "react-native";

const colorScheme = Appearance.getColorScheme();

const Colors = {
  dark: {
    primary: "#ed8815",
    secondary: "#00FF00",
    tertiary: "#0000FF",
    white: "#FFFFFF",
    text: "#f0f0f0",
    background: "#212121",
    backgroundOpacity: "rgba(240, 240, 240, 0.2)",
  },
  light: {
    primary: "#ed8815",
    secondary: "#00FF00",
    tertiary: "#0000FF",
    white: "#FFFFFF",
    text: "#212121",
    background: "#f0f0f0",
    backgroundOpacity: "rgba(33, 33, 33, 0.2)",
  },
};

export default Colors[colorScheme || "light"];
