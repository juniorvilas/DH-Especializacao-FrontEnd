import React, { useContext } from "react";
import { ContextoFormulario } from "../../context/contextoFormulario";

/**
 * Componente que mostra os detalhes do fomulário
 * @author Carlindo Junior
 * @returns {JSX.Element}
 */

const Detalhe = () => {

  /**  Utilizando o ContextoFormulario pegamos os dados do formulário para podermos mostrá-lo em a visualização.*/
  const { formulario } = useContext(ContextoFormulario);

/** Dessa forma conseguimos criar os objetos treinador e pokemon  */
  const { 
    nome,
    apelido,
    email 
  } = formulario?.treinador;

  const {
    nomePokemon,
    tipoPokemon,
    elementoPokemon,
    alturaPokemon,
    idadePokemon,
  } = formulario?.pokemon;

  return (
    <div className="detalhe-formulario">
      <div className="cabecalho">
        <h3>Vista prévia da soliticação</h3>
      </div>
      <section className="dados-cliente">
        <h4>Dados do Treinador</h4>
        <div className="lista">
          <p>Nome: {nome}</p>
          <p>Apelido: {apelido}</p>
          <p>Email: {email}</p>
        </div>
      </section>
      <section className="dados-cliente">
        <h4>Dados do Pokémon</h4>
        <div className="lista">
          <p>Nome: {nomePokemon}</p>
          <p>Tipo: {tipoPokemon}</p>
          <p>Elemento: {elementoPokemon}</p>
          <p>Altura: {alturaPokemon}</p>
          <p>Idade: {idadePokemon}</p>
        </div>
      </section>
      <button
        className="botao-enviar"
        onClick={() => alert("Solicitação enviada :)")}
      >
        Enviar Solicitação
      </button>
    </div>
  );
};

export default Detalhe;


