import { Text, View } from "react-native";
import { styles } from "../styles/StyleSheet";

export default function ResultadoComponent({ alcoolPreco, gasolinaPreco }) {
  const results = alcoolPreco / gasolinaPreco;
  console.log("Resultado da conta:", results);
  return (
    <View>
      {results < 0.7 ? (
        <Text style={styles.resultado}>Compensa usar Álcool</Text>
      ) : (
        <Text style={styles.texto2}>Compensa usar Gasolina</Text>
      )}
    </View>
  );
}
