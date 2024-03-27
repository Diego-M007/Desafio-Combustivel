import React from "react";
import { View, Modal } from "react-native";
import PreçoComponent from "./PreçoComponent";
import BotoesComponent from "../components/BotoesComponent";
import ImagemComponent from "../components/imagemComponent";
import TextoComponent from "../components/TextoComponent";
import { useState } from "react";

export default function Tela2Component({ alcoolPreco, gasolinaPreco }) {
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
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "gray",
        }}
      >
        <View>
          <ImagemComponent imagemSource={require("../assets/images/gas.png")} />
          <TextoComponent txt={"Com os Preços:"} />
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
