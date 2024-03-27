import { Image } from "react-native";
import { styles } from "../styles/StyleSheet";

export default function ImagemComponent({ imagemSource }) {
  return <Image style={styles.img} source={imagemSource} />;
}
