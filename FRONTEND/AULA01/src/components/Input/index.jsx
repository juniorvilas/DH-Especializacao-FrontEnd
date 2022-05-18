import React, { useEffect, useState, useContext, useRef } from "react";
import { ContextoFormulario } from "../../context/contextoFormulario"


// acrecenta uma props shouldFocus que informa se deve focar o input
const Input = ({ name, label, type = "text",  shouldFocus = false,
isPokemon = false, }) => {
  // Aqui devemos acessar o estado global para obter os dados
  // do formulário e uma maneira de atualizá-los.
  const { handleInputBlur, fomulario } = useContext(ContextoFormulario);

  //criamos uma ref para dar o focus() assim que a pagina é carregada
  const ref = useRef(null);  


  // Além disso, usaremos um estado local para lidar com o estado da input.
  const [stateInput, setStateInput] = useState("");

  const onChange = (e) => {
    // Aqui devemos atualizar o estado local do input
    setStateInput(e.target.value);
  };

  const onBlur = (e) => {
    e.preventDefault(); //passammos o preventDefault para não recarregar a pagina a cada onBlur
    // Aqui devemos atualizar o estado global com os dados de
    // cada entrada.
    // DICA: Podemos usar o nome de cada entrada para salvar
    // os dados no estado global usando uma notação { chave: valor }
    handleInputBlur(isPokemon ? "ATUALIZAR_POKEMON" : "ATUALIZAR_TREINADOR", {
      campo: name,
      valor: stateInput,
    });
  };

  //Depois que a pagina carrega focamo no primeiro input usando a ref, que passamos como parametro para o input do formulario
  useEffect(() => {
    if (ref.current && shouldFocus) {
      ref.current.focus();
    }
  }, [shouldFocus]);


  return (
    <div className="input-receptor">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        value={stateInput}
        id={name}
        onChange={onChange}
        onBlur={onBlur}
        ref={ref}
      />
    </div>
  );
};

export default Input;
