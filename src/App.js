import Button from "./button";

const App = ()=>{
  const miVariable = true;
  if(miVariable){
    return <p>Variable en {miVariable.toString()}</p>
  }
  return (
    <div>
      <h1 onClick={(e)=>console.log('click', e)}>Hola Mundo</h1>
      <Button onClick={()=>console.log('clickeado')}>
        Enviar
      </Button>
    </div>
  );
};
export default App;