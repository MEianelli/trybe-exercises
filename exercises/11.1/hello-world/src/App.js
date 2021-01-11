import NameAndDescription from './Component';

function App() {
  const compromissos = ['musica', 'exercicios', 'comer', 'jogar', 'dormir'];
  const task = value => {
    return <li>{value}</li>;
  };
  return compromissos.map(task);
}

export default App;
