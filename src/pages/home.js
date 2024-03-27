import React, { useState } from "react";
import BotoesComponent from "../components/BotoesComponent";
import ImagemComponent from "../components/imagemComponent";
import InputComponents from "../components/InputsComponents";
import TextoComponent from "../components/TextoComponent";
import Tela2Component from "../components/Tela2Component";
import { View } from "react-native";

export default function Homecomponent() {
  const [alcoolPreco, setAlcoolPreco] = useState("");
  const [gasolinaPreco, setGasolinaPreco] = useState("");
  const [visible, setVisible] = useState(false);

  visModal = (vis) => {
    if (!visible) {
      setVisible(vis);
    } else {
      setVisible(vis);
    }
  };

  const handleCalculation = () => {
    // Aqui você pode realizar cálculos ou validações com os preços
    // Se necessário, você pode passar os preços como props para Tela2Component
  };

  return (
    <View>
      <ImagemComponent imagemSource={require("../assets/images/logo.png")} />
      <TextoComponent txt={"Qual Melhor Opção?"} />
      <InputComponents
        tituloinput={"Álcool (preço por litro)"}
        onChangeText={setAlcoolPreco}
      />
      <InputComponents
        tituloinput={"Gasolina (preço por litro)"}
        onChangeText={setGasolinaPreco}
      />
      <BotoesComponent txtbutton={"calcular"} funcao={() => visModal(true)} />
      <Tela2Component
        alcoolPreco={alcoolPreco}
        gasolinaPreco={gasolinaPreco}
        visible={visible}
      />
    </View>
  );
}
