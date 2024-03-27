import React from "react";
import { View, Modal } from "react-native";
import PreçoComponent from "./PreçoComponent";
import BotoesComponent from "../components/BotoesComponent";
import ImagemComponent from "../components/imagemComponent";
import TextoComponent from "../components/TextoComponent";
import { useState } from "react";
import ResultadoComponent from "./ResultadoComponent";

export default function Tela2Component({ alcoolPreco, gasolinaPreco }) {
  const [visible, setVisible] = useState(false);

  visModal = (vis) => {
    if (!visible) {
      setVisible(vis);
    } else {
      setVisible(vis);
    }
  };

  // let Alcool = alcoolPreco,
  //   Gasolina = gasolinaPreco,
  //   compensa;
  // compensa = (Alcool / Gasolina <= 0, 7) ? "Alcool" : "Gasolina";
  // console.log(compensa);

  return (
    <Modal transparent={true} animationType="fade" visible={visible}>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "black",
          font: "20",
        }}
      >
        <View>
          <ImagemComponent imagemSource={require("../assets/images/gas.png")} />
          <ResultadoComponent
            alcoolPreco={alcoolPreco}
            gasolinaPreco={gasolinaPreco}
          />
          <TextoComponent txt={"Com os Preços: "} />
          <PreçoComponent
            alcoolPreco={alcoolPreco}
            gasolinaPreco={gasolinaPreco}
          />
          <BotoesComponent
            txtbutton={"Calcular novamente"}
            funcao={() => visModal(false)}
          />
        </View>
      </View>
    </Modal>
  );
}
