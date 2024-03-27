import React from "react";
import { Text, View } from "react-native";
import { styles } from "../styles/StyleSheet";

export default function PreçoComponent({ alcoolPreco, gasolinaPreco }) {
  return (
    <View style={styles.container4}>
      <Text style={styles.txtpreço}>Álcool: R${alcoolPreco}</Text>
      <Text style={styles.texto}>Gasolina: R${gasolinaPreco}</Text>
    </View>
  );
}
