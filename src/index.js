import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// <p> Hola mundo </p>
//const x = React.createElement('p' ,null,'hola mundo')
//const X = () => <p> Hola mundo </p>
/* 
const Li = ({children, estado, casa, edad}) => {
  return (<li>{children} está {estado}</li>)
}  

const X = ()=> 
  <ul>
    <Li 
      estado={'relajado'}
      casa={false}
      edad={28}
    >Santiago Sanmartín</Li>  
    <Li
      estado={'triste'}
    >Persona 2</Li>
    <Li
      estado={'feliz'}
    >Persona 3</Li>
  </ul>

ReactDOM.render(
  <X />, document.getElementById('root')
); */
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
