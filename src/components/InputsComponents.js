import { View, TextInput, Text } from "react-native";
import { styles } from "../styles/StyleSheet";

export default function InputComponents({ tituloinput, onChangeText }) {
  const changeTxt = (textInput) => {
    onChangeText(textInput);
  };

  return (
    <View style={{ width: "70%" }}>
      <Text style={styles.input}>{tituloinput}</Text>
      <TextInput
        secureTextEntry={false}
        inputMode="numeric"
        style={styles.Input}
        onChangeText={changeTxt}
      />
    </View>
  );
}
