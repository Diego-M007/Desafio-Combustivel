import { TouchableOpacity, Text } from "react-native";

export default function BotoesComponent({ txtbutton, funcao, style, style2 }) {
  return (
    <TouchableOpacity style={style} onPress={funcao}>
      <Text style={style2}>{txtbutton}</Text>
    </TouchableOpacity>
  );
}
