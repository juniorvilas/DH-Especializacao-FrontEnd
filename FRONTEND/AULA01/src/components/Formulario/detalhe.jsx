import React, { useContext, useEffect } from "react";
import { useMutation } from "react-query";
import { enviarSolicitacao } from "../Api/api_post_form";
import { ContextoFormulario } from "../../context/contextoFormulario";


/**
 * Componente que mostra os detalhes do fomulário
 * @author Carlindo Junior
 * @returns {JSX.Element}
 */

const Detalhe = () => {
  //hook useMutation para enviar solicitação ao fomulário
  const { data, isLoading, isError, mutate, isSuccess } = useMutation(enviarSolicitacao);

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
    especiePokemon,
  } = formulario?.pokemon;

  //utilizamos o useEffect para exibir um alerta caso isSucess ou isError for true
  useEffect(() => {
    if(isSuccess) {
      alert("Formulário enviado com sucesso!")
    } else if (isError) {
      alert("Error ao enviar Formulário")
    }
  }, [isSuccess, data, isError])

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
          <p>Especie: {especiePokemon}</p>
        </div>
      </section>
      <button className="botao-enviar" onClick={() => mutate(formulario)}>
        {isLoading ? "Enviando formulario..." : "Enviar Solicitação"}
      </button>
    </div>
  );
};

export default Detalhe;


