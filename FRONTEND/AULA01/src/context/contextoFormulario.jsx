// Aqui devemos criar nosso contexto e nosso provider.
import { useReducer, createContext } from "react";
import PropTypes from 'prop-types';


/**
 * Estado inicial do formulário.
 * @type {{
 *    treinador:{
 *      nome: string,
 *      apelido: string,
 *      email: string
 *    },
 *    pokemon: {
 *      nomePokemon: string,
 *      tipoPokemon: string,
 *      elementoPokemon: string,
 *      alturaPokemon: string,
 *      idadePokemon: string
 *   }
 * }}}
 */

const initialState = {
    treinador: {
      nome: "",
      apelido: "",
      email: "",
    },
    pokemon: {
      nomePokemon: "",
      tipoPokemon: "",
      elementoPokemon: "",
      alturaPokemon: "",
      idadePokemon: "",
    },
  };


/**
 * Função redutor para o estado do formulário que atualiza o estado com base na ação.
 * 
 * @author Carlindo Junior 
 * @param {initialState} state
 * @param {{
 *    type: string,
 *   payload: {
 *    [string]: string,
 * }} action
 *
 * @returns {initialState}
 */

const reducer = (state, action) => {
    switch (action.type) {
      case "ATUALIZAR_TREINADOR":
        return {
          ...state,
          treinador: {
            ...state.treinador,
            ...action.payload,
          },
        };
      case "ATUALIZAR_POKEMON":
        return {
          ...state,
          pokemon: {
            ...state.pokemon,
            ...action.payload,
          },
        };
      default:
        return state;
    }
  };



export const ContextoFormulario = createContext();

/**
 * Provider do contexto do formulário que fornece a função de estado e atualização para o componente filho.
 *
 * @param {{
 *  children: React.ReactNode,
 * }} props
 * @returns {JSX.Element}
 */
const ProviderFormulario = ({ children }) => {
  const [formulario, dispatch] = useReducer(reducer, initialState);

  /**
   * Função que recebe os parâmetros do formulário e aciona a ação de atualização.
   *
   * @param {String} type
   * @param {{
   *    [string]: string,
   * }} valorInput
   */
  const handleInputBlur = (type, valorInput) => {
    const { campo, valor } = valorInput;

    // Despachamos a ação.
    dispatch({
      type,
      payload: {
        [campo]: valor,
      },
    });
  };

    return (
        <ContextoFormulario.Provider
            value={{ 
                formulario,
                handleInputBlur,
            }}
        >
            {children}
        </ContextoFormulario.Provider>
    );
};

ProviderFormulario.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element)
};

export default ProviderFormulario;
