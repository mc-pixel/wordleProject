import './App.css';
import Keyboard from './components/Keyboard';
import Board from './components/Board';
import { createContext, useState} from "react";
import { boardDefault } from './Words';
import GameOver from './components/GameOver';

export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(boardDefault);
  const [currAttempt, setCurrAttempt] = useState({attempt: 0, letterPos: 0});
  const [gameOver, setGameOver] = useState({gameOver: false, guessedWord: false,});

  const correctWord = "RONIN";

  const onSelectLetter = (keyVal) =>{
    if(currAttempt.letterPos > 4) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letterPos] = keyVal;
    setBoard(newBoard);
    setCurrAttempt({...currAttempt, letterPos: currAttempt.letterPos + 1});

  }
  const onDelete = () =>{
    if(currAttempt.letterPos === 0) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letterPos - 1] = "";
    setBoard(newBoard);
    setCurrAttempt({...currAttempt, letterPos: currAttempt.letterPos - 1});

  }
  const onEnter = () =>{
    if (currAttempt.letterPos !==5) return;
    setCurrAttempt({attempt: currAttempt.attempt + 1, letterPos: 0});
  }
  
  return (
    <div className="App">
     <nav>
       <h1>Wordle Project</h1>
       </nav>
       <AppContext.Provider value={{board, setBoard,currAttempt, setCurrAttempt,onSelectLetter,onDelete,onEnter,correctWord,gameOver,setGameOver}}>
        <div className='game'>
          <Board />
          {gameOver.gameOver ? <GameOver /> : <Keyboard />}
       </div>
       </AppContext.Provider>
     
    </div>
  );
}

export default App;
