import { View, Text } from "react-native";
import styles from "./Header.styles";

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>To Do</Text>
      <Text style={styles.title}>To Do</Text>
    </View>
  );
};

export default Header;
