/*
  4.1.2 - Nombre, función, valor [A]


  O código deve ser semanticamente correto e sem
  erros significativos.

  ---

  4.1.1 - Análisis (código) [A]

  Toda tecnologia acessível faz uso das propriedades de
  nome, função e valor para identificar corretamente o
  elementos HTML padrão. qualquer componente
  custom também deve trazer esses atributos adequadamente.
*/

import "./App.css";
import Navbar from "./components/navbar";
import Email from "./components/email";
import About from "./components/about";
import Video from "./components/video";

const App = () => {
  return (
    <>
      <Navbar />
      <main className="content-container">
        <section>
          <h2>Vídeo</h2>
          <Video />
        </section>
        <section className="about">
          <h2>Sobre Rick and Morty</h2>
          <About />
        </section>
        <section className="section">
          <h2>Recibir noticias sobre la serie</h2>
          <Email />
        </section>
      </main>
    </>
  );
};

export default App;
