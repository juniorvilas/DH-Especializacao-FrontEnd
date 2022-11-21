import React, { useState } from "react";

import * as S from "./styles.ts"

const Banner = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const handleButton = () => {
    setIsDisabled(!isDisabled)
  }
  console.log(isDisabled)
  return (
    <S.Container>
      <S.Title>Rick and Morty</S.Title>
      <S.Text>
        Rick and Morty (em português Rick e Morty) é uma série de animação
        adulta norte-americana de comédia e ficção científica criada por Justin
        Roiland e Dan Harmon para o bloco de programação noturno Adult Swim,
        exibido no canal Cartoon Network.
      </S.Text>
      <S.Div>
        <S.Button onClick={handleButton}>Assistir Trailer</S.Button>
      </S.Div>
      <S.Div>
        <S.Button disabled={isDisabled}>Salvar no favoritos</S.Button>
      </S.Div>


    </S.Container>
  );
};

export default Banner;
