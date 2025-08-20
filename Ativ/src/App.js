import React from "react";
import Header from "./componentes/Header.js";
import Cartao from "./componentes/Cartao.js";
import Footer from "./componentes/Footer.js";

function App() {
  return (
    <div>
      <Header />
      <Cartao 
        foto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAARxDmwNRlVAG_tRYAe4F5A0enz8P3bB-Wg&s"
        nome="Brayan Charles"
        profissao="Estudante de TI"
        descricao="Tentando estudar"
      />
      <Footer />
    </div>
  );
}

export default App;

