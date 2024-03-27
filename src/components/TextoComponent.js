import { Text, StyleSheet } from "react-native";
import { styles } from "../styles/StyleSheet";

export default function TextoComponent({ txt }) {
  return <Text style={styles.txt}>{txt}</Text>;
}
