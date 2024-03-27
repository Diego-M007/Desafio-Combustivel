import { TouchableOpacity, Text } from "react-native";
import { styles } from "../styles/StyleSheet";

export default function BotoesComponent({ txtbutton, funcao }) {
  return (
    <TouchableOpacity style={styles.buttoncalcular} onPress={funcao}>
      <Text style={{ color: "white", fontSize: 25 }}>{txtbutton}</Text>
    </TouchableOpacity>
  );
}
