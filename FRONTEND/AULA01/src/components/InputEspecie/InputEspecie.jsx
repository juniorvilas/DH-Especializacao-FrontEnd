import React, { useState, useContext } from "react";
import { useQuery } from "react-query";
import { ContextoFormulario } from "../../context/contextoFormulario";
import { getPokemonEspecies } from "../Api/api_especies";


const InputEspecie = ({ name, label }) => {
  
  const [mostrarPopup, setMostrarPopup] = useState(false);
  const { handleInputBlur } = useContext(ContextoFormulario);


  const [page, setPage] = useState(1);
  const { data } = useQuery(
    // Aqui nós alteramos o queryKey para um array que tem o
    // nome e número da página. Desta maneira,
    // gerenciamos o cache de cada página de forma independente.
    ["getPokemonEspecies", page],
    // Quando invocamos o callback, passamos o número da página como argumento.
    () => getPokemonEspecies(page),
    // Adicionamos a propriedade keepPreviousData para manter o
    // personagem da página atual até recebermos o
    // Próxima página.
    {
      keepPreviousData: true
    }
  );

  console.log(data);

  const incrementarPagina = () =>
    setPage((prevPagina) => Math.min(prevPagina + 1, 897));

  const decrementarPagina = () =>
    setPage((prevPagina) => Math.max(prevPagina - 1, 1));
  console.log(data)
  console.log(page);

  const escolherEspecie = (e, nomeEspecie) => {
    e.preventDefault();

    handleInputBlur("ATUALIZAR_POKEMON", {
      campo: "especiePokemon",
      valor: nomeEspecie,
    });
    setMostrarPopup(false);
  };

  const renderizarEspecies = () => (
    <>
      {data.map((especies) => (
        <button
          key={especies.name}
          className="button-especie"
          onClick={(e) => escolherEspecie(e, especies.name)}
        >
          {especies.name}
        </button>
      ))}
    </>
  );

  return (
    <div className="input-especies">
      {mostrarPopup && (
        <div className="popup-especies">
          <h4>Selecionar especie</h4>
          <div className="especies">{renderizarEspecies()}</div>
          <div className="paginador">
            <button onClick={decrementarPagina} className="button-anterior">Anterior</button>
            <button onClick={incrementarPagina} className="button-seguinte">Seguinte</button>
          </div>
        </div>
      )}
      <p htmlFor={name}>{label}</p>
      <button
        className="button-selecionar-especies"
        onClick={() => setMostrarPopup(true)}
      >
        Selecionar
      </button>
    </div>
  );
};

export default InputEspecie;