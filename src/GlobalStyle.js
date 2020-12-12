// será o responsável por fazer o meio de campo entre o App() que renderiza e o Themes que possui a estilização

import { createGlobalStyle } from "styled-components"

// criando o que será exportado, contendo o que será estilizado ao renderizar
// deixando o tema dinâmico de acordo com o passado em theme
// adiciona todas as estilizações desejadas
export const GlobalLayout = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.body};
    text: ${({ theme }) => theme.text};
  }
  
  .Email {
    background-color: ${({ theme }) => theme.text};
    color: #333333;
    
    border-width: 2px;

    margin-top: 10px;
    margin-botton: 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 18px;    
  }

  input::placeholder{
    color: #cccccc;
  }

  .button {
    background-color: ${({ theme }) => theme.button};
    color: ${({ theme }) => theme.buttontext};

    border-width: 2px;

    margin-top: 10px;
    margin-botton: 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 18px;   

  }
  
  .teste {
    color: ${({ theme }) => theme.cabecalho};
  }

`;


