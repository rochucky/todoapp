import { View, Text } from "react-native";
import styles from "./Content.styles";
import { Appearance } from "react-native";

const theme = Appearance.getColorScheme();

const Content = () => {
  return (
    <View style={styles.container}>
      <Text>Content</Text>
      <Text>{theme}</Text>
    </View>
  );
};

export default Content;
