import './App.css';
import Container from './component/Container/Container';
import { GameProvider } from './context/GameContext';

function App() {
  return (
    <GameProvider>
      <Container/>
    </GameProvider>
  );
}

export default App;
