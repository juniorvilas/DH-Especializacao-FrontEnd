//Criar função para obter os tipos de pokemom da API
export const getPokemonTypes = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/type/");
    const data = await response.json();
    return data.results;
  };