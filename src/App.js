import './App.css';
import Evento from './components/evento.js';
import Formulario from './components/formulario.js';

function App() {
  return (
    <div className="App">
      <h1>Testando Eventos</h1>
      <Evento numero="1" />
      <Evento numero="2" />
      <Formulario/>
    </div>
  );
}

export default App;
