import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import ProviderFormulario from "../../context/contextoFormulario";
import pokebola from "../../assets/pokebola.png";
import treinador from "../../assets/treinador.png";
import pikachu from "../../assets/pikachu.png";
import { getPokemonTypes } from "../Api/Api_tipo"
import Input from "../Input";
import Select from "../Select";
import Detalhe from "./detalhe";
import InputEspecie from "../InputEspecie/InputEspecie";



// Neste componente temos nosso formulário e dentro dele
// temos os componentes que precisam consumir nosso estado.
// Lembre-se qual é o passo que devemos dar para que nosso
// componentes podem consumir um estado global.

/**
 * Componente que exibe os inputs do formulário
 * @author Carlindo Junior
 * @returns {JSX.Element}
 */
const Formulario = () => {

  const { 
    data: tipos,
    isLoading,
    isError,
  } = useQuery("pokemonTypes", getPokemonTypes)

  return (
    <>
      <header className="form-header">
        <div>
          <img src={pokebola} alt="pokebola" />
          <h2>Centro Pokémon de Ash</h2>
        </div>
        <Link className="retornar" to="/">
          Home
        </Link>
      </header>
      <div className="formulario-entrada">
        <h3>Solicitação de atenção</h3>
        <p>
          Por favor, preencha o formulário para que possamos mostrar seu pokémon
        </p>
        <div className="corpo-formulario">
          <ProviderFormulario>
            <div className="inputs">
              <div>
                <p className="nome-secao">
                  <img src={treinador} alt="treinador" />
                  <span>Treinador</span>
                </p>
                <Input name="nome" label="Nome" shouldFocus={true} />
                <Input name="apelido" label="Apelido" />
                <Input name="email" label="Email" type="email" />
              </div>
              <div>
                <p className="nome-secao">
                  <img src={pikachu} alt="pikachu" />
                  <span>Pokémon</span>
                </p>
                <Input name="nomePokemon" label="Nome" isPokemon={true} />
                <Select
                  name="tipoPokemon"
                  label="Tipo"
                  options={tipos}
                  isPokemon={true}
                  disabled={isLoading || isError} // Desativamos o input se estiver carregando ou se houver um erro
                />
                <Input
                  name="elementoPokemon"
                  label="Elemento"
                  isPokemon={true}
                />
                <Input name="alturaPokemon" label="Altura" isPokemon={true} />
                <Input name="idadePokemon" label="Idade" isPokemon={true} />
                <InputEspecie name="especiePokemon" label="Especie" isPokemon={true} />
              </div>
            </div>
            <Detalhe />
          </ProviderFormulario>
        </div>
      </div>
    </>
  );
};

export default Formulario;