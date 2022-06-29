# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

# Especialização Front End
## Mesa de Trabalho - Aula 19

Thunk
Objetivo
Olá Houser, tudo bem com você? Nesta atividade vamos trabalhar os conceitos abordados na aula. 
A ideia é criar uma aplicação que envolve os conceitos mostrados nesta aula.
Instruções e requisitos do entregável

- Criar uma aplicação nova e configure o Redux com Redux Thunk.
- Criar um orderReducer com um array de produtos vazio como estado inicial.
- Criar um case no switch da action que retorne um array vazio para os produtos (simulando a ação de limpar o carrinho).
- Utilize o orderReducer no store configurado.
- Criar uma Action com o mesmo type utilizado no switch do orderReducer e com payload sendo um array vazio (action para limpar o carrinho).
- Criar uma Action que guarde em uma variável os produtos do reducer e faça uma requisição para uma API com axios passando os produtos como body da requisição.
- Caso a requisição da Action acima tiver sucesso, executar a Action para limpar o carrinho.
- No App.js criar um botão que quando clicado dê o dispatch na Action criada que faz a requisição externa.

Conclusão
Parabéns! Você acaba de criar um projeto React com os principais recursos do Redux.


