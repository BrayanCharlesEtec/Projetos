import React, { useState } from "react";

function Formulario() {
  const [nome, setNome] = useState('Brayan');
  const [senha, setSenha] = useState('');

  function cadastrarUsuario(e) {
    e.preventDefault();
    console.log(`O usuário ${nome} foi cadastrado com a senha: ${senha}`);
  }

  return (
    <div>
      <h1>Cadastro</h1>
      <form onSubmit={cadastrarUsuario}>
        <div>
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            placeholder="Digite seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="senha">Senha:</label>
          <input
            type="password"
            id="senha"
            name="senha"
            placeholder="Digite sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>
        <div>
          <input type="submit" value="Cadastrar" />
        </div>
      </form>
      <p>nome: {nome}</p>
      <p>Senha: {senha}</p>
    </div>
  );
}

export default Formulario;
