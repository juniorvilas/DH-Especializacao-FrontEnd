
/* 1.4.2 - Controle de áudio [A]

Uma maneira fácil de pausar, silenciar
ou ajuste o volume de qualquer áudio reproduzido
automaticamente por mais de 3 segundos na interface.
*/

import "./style.css";

const Video = () => {
  return (
    <div className="container-video">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/vkXfKMhgLQ8?controls=1" //?controls=0 es el responsable de los controles de video.
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Video;
