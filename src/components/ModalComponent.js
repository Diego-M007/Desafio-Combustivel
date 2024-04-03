import React from "react";
import { View, Modal } from "react-native";
import PrecoComponent from "./PreçoComponent";
import BotoesComponent from "./BotoesComponent";
import ImagemComponent from "./imagemComponent";
import TextoComponent from "./TextoComponent";
import { useState } from "react";
import ResultadoComponent from "./ResultadoComponent";
import { styles } from "../styles/StyleSheet";

// Vocês estão com duas funções visModal, é possivel fazer com uma só.

export default function ModalComponent({ alcoolPreco, gasolinaPreco }) {
  const [visible, setVisible] = useState(false);

  visModal = (vis) => {
    if (!visible) {
      setVisible(vis);
    } else {
      setVisible(vis);
    }
  };

  return (
    <Modal transparent={true} animationType="fade" visible={visible}>
      <View style={styles.container3}>
        <ImagemComponent imagemSource={require("../assets/images/gas.png")} />
        <ResultadoComponent
          alcoolPreco={alcoolPreco}
          gasolinaPreco={gasolinaPreco}
        />
        <TextoComponent txt={"Com os Preços: "} />
        <PrecoComponent
          alcoolPreco={alcoolPreco}
          gasolinaPreco={gasolinaPreco}
        />
        <BotoesComponent
          txtbutton={"Calcular novamente"}
          funcao={() => visModal(false)}
          style={styles.buttonRecalcular}
          style2={styles.txtbutton2}
        />
      </View>
    </Modal>
  );
}
