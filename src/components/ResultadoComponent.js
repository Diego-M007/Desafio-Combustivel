import { Text, View } from "react-native";

export default function ResultadoComponent({ alcoolPreco, gasolinaPreco }) {
  const results = alcoolPreco / gasolinaPreco;
  console.log("Resultado da conta:", results);
  return (
    <View>
      {results < 0.7 ? (
        <Text
          style={{
            color: "green",
            fontSize: 29,
            margin: 20,
            fontWeight: "bold",
          }}
        >
          Compensa usar Álcool
        </Text>
      ) : (
        <Text
          style={{
            color: "green",
            fontSize: 29,
            margin: 20,
            fontWeight: "bold",
          }}
        >
          Compensa usar Gasolina
        </Text>
      )}
    </View>
  );
}
