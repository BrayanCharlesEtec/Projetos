import React from "react";

function Cartao({ foto, nome, profissao, descricao }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "10px",
      padding: "20px",
      width: "250px",
      textAlign: "center",
      boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
      margin: "20px auto"
    }}>
      <img 
        src={foto} 
        alt={nome} 
        style={{ width: "100px", borderRadius: "50%" }} 
      />
      <h2>{nome}</h2>
      <h4>{profissao}</h4>
      <p>{descricao}</p>
    </div>
  );
}

export default Cartao;
