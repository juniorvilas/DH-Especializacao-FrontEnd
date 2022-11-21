/*
1.4.8 - Representación visual [AAA]


Defina controles específicos para a apresentação
informações na tela sem comprometer sua legibilidade.

*/

import "./style.css";

const About = () => {
  return (
    <div>
      <div className="blockText">
        <p>Rick and Morty es una serie de animación.</p>
        <p>
          A série estreou em 2 de dezembro de 2013 e mostra o perigoso
          aventuras do cientista alcoólatra Rick e seu neto Morty, que
          divida seu tempo entre a vida familiar e as viagens
          interdimensional.
        </p>

        <a
          href="https://es.wikipedia.org/wiki/Rick_and_Morty"
          className="buttonAbout"
          
        >
          <img src="download.png" alt="Imagem Download" />
          <p>Ler mais</p>
        </a>
      </div>

      <div>
        <img src="cite.png" alt="Imagem Cidade" className="imageCite" />
      </div>
    </div>
  );
};

export default About;
