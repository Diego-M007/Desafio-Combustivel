import { TouchableOpacity, Text } from "react-native";
import { styles } from "../styles/StyleSheet";

export default function BotoesComponent({ txtbutton, funcao }) {
  return (
    <TouchableOpacity styles={styles.buttoncalcular} onPress={funcao}>
      <Text>{txtbutton}</Text>
    </TouchableOpacity>
  );
}
