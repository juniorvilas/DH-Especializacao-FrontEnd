/*

3.3.1 - Erro de identificação [A]

Cada vez que uma mensagem de erro é exibida,
elemento deve ser claramente identificado
que gerou o erro visual e audivelmente (exemplo:
mudança de cor no elemento + um ícone de alerta +
Uma mensagem de texto)

*/

import "./style.css";

const Email = () => {
  return (
    // Verifique se o campo de e-mail contém algo escrito. Se não, você deve
    // marcar um erro na entrada.
    // Para isso, o atributo "required" pode ser utilizado na entrada do email.
    <form>
      <input required type="email" placeholder="Digite seu email aqui" />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Email;
