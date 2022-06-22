import React, { useState } from 'react';
import logo from './logo.svg';
import  Aula15 from './Aula15';
import './App.css';

/* interface IPokemon {
  readonly id: number;
  nome: string;
  kilos?: number;
  pokemon: boolean;
  categoria: string;
  img?: string;

} */



function App() {

/*   const pokemons: IPokemon[] = [
    {
      id: 1,
      nome: "bulbasaur",
      kilos: 6.9,
      pokemon: true,
      categoria: "semente",
      img: "https://criticalhits.com.br/wp-content/uploads/2019/09/Ash_Bulbasaur.jpg",
    },
    {
      id: 2,
      nome: "charmander",
      kilos: 8.5,
      pokemon: true,
      categoria: "lagarto",
      img: "data:image/jpeg;base64,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",
    },
    {
      id: 3,
      nome: "charizard",
      kilos: 95.5,
      pokemon: true,
      categoria: "chama",
      img: "https://kanto.legiaodosherois.com.br/w728-h381-gnw-cfill-gcc-f:fbcover/wp-content/uploads/2022/05/legiao_EV7b5kygAl0L.jpg.jpeg",
    },
    {
      id: 4,
      nome: "ash",
      pokemon: false,
      categoria: "treinador",
      img: "https://wp.radiojhero.com/wp-content/uploads/2019/09/ash-1180551-1280x0.jpeg",
    },
   ]; */
  
  

/*   let name: string = "Ash Ketchum";
  let birthDate: string = "2012-04-01";
  let nickName: string = "Ash";  
  let genre: string = "Masculino";
  let isTrainer: boolean = true;
  let region: string = "Ceara";
  const [age, setAge] = useState<number>(0);
  
  function getAge() {
    let currentYear = new Date().getFullYear();
   let currentBirthYear = birthDate.split('-')[0];
   setAge(currentYear - Number(currentBirthYear));   */ 

   return (
    <div className="App">
      <header className="App-header">
        <Aula15/>
   {/*      <p>Nome: {name}</p>
        <p>Nascimento: {birthDate}</p>
        <p>Apelido: {nickName}</p>
        <p>Genero: {genre}</p>
        <p>É treinador: {isTrainer.toString()}</p>
        <p>Região: {region}</p>
        <p>Idade: {age}</p>
        <button onClick={getAge}>Calcular Idade</button> */}
     {/*    {pokemons.map( pokemon => <div style={{border: '1px solid white', width: '500px', display: 'flex', flexDirection: 'column', margin: '2rem 0px', padding: '0px'}}>
          <p>ID: {pokemon.id}</p>
          <p>Nome: {pokemon.nome}</p>
          <p>Peso: {pokemon.kilos ? pokemon.kilos : "Peso não informado"}</p>
          <p>É um pokemon? {pokemon.pokemon? "Sim" : "Não"}</p>
          <p>Categoria: {pokemon.categoria}</p>
          <img style={{ width: '500px', margin: '0'}} src={pokemon.img} alt="imagem pokemon" />
        </div>)} */}
      </header>
    </div>
  );

  }

  


export default App;
