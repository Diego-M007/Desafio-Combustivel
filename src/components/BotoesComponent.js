import { TouchableOpacity, Text } from "react-native";
import { styles } from "../styles/StyleSheet";

export default function BotoesComponent({ txtbutton, funcao, style }) {
  return (
    <TouchableOpacity style={style} onPress={funcao}>
      <Text style={styles.txtbutton}>{txtbutton}</Text>
    </TouchableOpacity>
  );
}
