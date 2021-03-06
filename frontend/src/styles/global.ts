import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    scrollbar-width: thin;
    outline: none;
  }

  button:focus {
    outline: 0;
  }

  body {

    -webkit-font-smoothing: antialiased;
    scrollbar-color: #e2e8f0 #F5F5F5;
  }

  body, input, button{

  }

  h1, h2, h3, h4, h5, h5, strong{
    font-weight: 500;
  }

  button{
    cursor: pointer;
  }

  input, label, select, button {
    margin: 0;
    border: 0;
    padding: 0;
    outline: none;
    display: inline-block;
    vertical-align: middle;
    white-space: normal;
    background: none;
    line-height: 1;
  }

  ::placeholder {
    font-weight: 500;
    line-height: 1.33;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    transition: background-color 5000s ease-in-out 0s;
    outline: none;
  }

  input[type=number] {
    -moz-appearance:textfield;
  }

  input[type=number]::-webkit-inner-spin-button{
    -webkit-appearance: none;
    margin: 0;
  }
  input[type=number]::-webkit-outer-spin-button{
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.1);
	background-color: #F5F5F5;
}

::-webkit-scrollbar
{
	width: 5px;
	background-color: #F5F5F5;
}

::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.1);
	background-color: #e2e8f0;
}

`;

export default GlobalStyle;
