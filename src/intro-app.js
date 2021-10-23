//import './App.css';
import './main.css';

const estilo = ({bg='#222'}) =>({
  backgroundColor: bg,
  color: '#fff',
  padding: '10px 15px',
  margin: '10px 15px'
});

const estilo2 = {
  boxShadow: '0 5px 3px rgba(0,0,0,0.1)'
};

const Li = ({children})=>{
  return (
    <li className="clase-li">{children}</li>
  );
};

const App = () => {
  return (
    <ul className="clase-css">
      <Li estado="feliz">Valor de li</Li>
    </ul>
  );
}

export default App;
