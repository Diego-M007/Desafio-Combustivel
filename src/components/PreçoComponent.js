import React from "react";
import { Text, View } from "react-native";

export default function PreçoComponent({ alcoolPreco, gasolinaPreco }) {
  const results = alcoolPreco / gasolinaPreco;
  console.log(results);

  return (
    <View>
      <Text>Álcool: R${alcoolPreco}</Text>
      <Text>Gasolina: R${gasolinaPreco}</Text>
    </View>
  );
}
