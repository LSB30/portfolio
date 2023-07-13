import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Poppins', sans-serif;
    scroll-behavior: smooth;

  }

  html {
    scroll-behavior: smooth;
    
  }
  :root {
    font-size: 62.5%;
    view-transition-name: root;
  }

  ::-webkit-scrollbar {
    width: 0.5rem;
    background: rgb(3,7,18);
    background: linear-gradient(90deg, rgba(3,7,18,1) 0%, rgba(30,30,37,1) 35%, rgba(6,5,5,1) 100%);
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 0.5rem;
    background-color: #635eff;}
  body {
    color:  #9ca3af;
    
    background: rgb(3,7,18);
    background: linear-gradient(90deg, rgba(3,7,18,1) 0%, rgba(30,30,37,1) 35%, rgba(6,5,5,1) 100%);
  }

  
  a {
    text-decoration: none;
  }


`;
