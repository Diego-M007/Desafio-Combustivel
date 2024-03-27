import React from "react";
import { Text, View } from "react-native";

export default function PreçoComponent({ alcoolPreco, gasolinaPreco }) {
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Text style={{ color: "white", fontSize: 15, marginTop: 10 }}>
        Álcool: R${alcoolPreco}
      </Text>
      <Text style={{ color: "white", fontSize: 15, marginTop: 10 }}>
        Gasolina: R${gasolinaPreco}
      </Text>
    </View>
  );
}
