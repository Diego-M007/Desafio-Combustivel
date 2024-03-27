import { TouchableOpacity, Text } from "react-native";

export default function BotoesComponent({ txtbutton, funcao }) {
  return (
    <TouchableOpacity onPress={funcao}>
      <Text>{txtbutton}</Text>
    </TouchableOpacity>
  );
}
