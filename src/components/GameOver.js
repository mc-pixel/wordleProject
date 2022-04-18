import React, { useContext } from 'react'
import { AppContext } from '../App'

function GameOver() {
    const {gameOver,currAttempt,correctWord} = useContext(AppContext)
  return (
    <div className='gameOver'>
        <h3>{gameOver.guessedWord ? "YOU WIN" : "YOU LOSE"}</h3>
        <h1>Correct: {correctWord}</h1>
        {gameOver.guessedWord && (<h3>YOU GUESSED IN {currAttempt.attempt} ATTEMPTS</h3>)}
    </div>
  )
}

export default GameOver