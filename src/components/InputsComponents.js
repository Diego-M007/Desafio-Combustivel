import { View, TextInput, Text } from "react-native";
import { styles } from "../styles/StyleSheet";

export default function InputComponents({ tituloinput, onChangeText }) {
  const changeTxt = (textInput) => {
    onChangeText(textInput);
  };

  return (
    <View>
      <Text style={styles.input}>{tituloinput}</Text>
      <TextInput
        secureTextEntry={false}
        inputMode="numeric"
        style={{ borderWidth: 5, borderColor: "black" }}
        onChangeText={changeTxt}
      />
    </View>
  );
}
