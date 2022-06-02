
export const getPokemonEspecies = async (page) => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species?offset=${page}&limit=3`);
        const json = await response.json();
        return json.results;
    }catch (err) {
        console.log(err);
    }
  };


