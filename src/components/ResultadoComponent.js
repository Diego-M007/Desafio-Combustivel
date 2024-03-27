import { Text, View } from "react-native";

export default function ResultadoComponent({ alcoolPreco, gasolinaPreco }) {
  const results = alcoolPreco / gasolinaPreco;
  console.log(results);
  return (
    <View>
      {results < 0.7 ? (
        <Text>Compensa usar Álcool</Text>
      ) : (
        <Text>Compensa usar Gasolina</Text>
      )}
    </View>
  );
}
