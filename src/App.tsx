import { useEffect } from 'react';
import * as C from './App.styles';
import { Char } from './components/Char';
import { useChar } from './hooks/useChar'

const App = () => {
  const char = useChar("Carol");
  const char2 = useChar("Nico");

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
  }, []);

  const handleKeyDown = (e: KeyboardEvent) => {
    switch(e.code) {
      case 'KeyA':
        char2.moveLeft();
      break;
      case 'ArrowLeft':
        char.moveLeft();
      break;
      case 'KeyW':
        char2.moveUp();
      break;
      case 'ArrowUp':
        char.moveUp();
      break;
      case 'KeyD':
        char2.moveRight();
      break;
      case 'ArrowRight':
        char.moveRight();
      break;
      case 'KeyS':
        char2.moveDown();
      break;
      case 'ArrowDown':
        char.moveDown();
      break;
    }
  }

  return(
    <C.Container>
      <C.Map>
        <Char x={char.x} y={char.y} side={char.side} name={char.name} /> 
        <Char x={char2.x} y={char2.y} side={char2.side} name={char2.name} /> 
      </C.Map>
      {/* <button onClick={() => char2.moveLeft()}>←</button>
      <button onClick={() => char2.moveRight()}>→</button>
      <button onClick={() => char2.moveUp()}>↑</button>
      <button onClick={() => char2.moveDown()}>↓</button> */}
    </C.Container>
  );
}

export default App;