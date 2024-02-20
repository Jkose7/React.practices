import { useState } from 'react'
import { TURNS } from './constans.js'
import { Square } from './components/Square.jsx'
import { WinnerModal } from './components/WinnerModal.jsx'

import { checkWinner, checkEndGame} from './logic/board.js'

import conffetti from 'canvas-confetti'



function App() {

  //use state para actualizar el tablero, valor inicial sera un array vacio
  const [board, setBoard] = useState(() =>{
    const boardFromStorage = window.localStorage.getItem('board')
    if (boardFromStorage) return JSON.parse(boardFromStorage)
    return Array(9).fill(null)
  })
  //use state para actualizar el turno, valor inicial sera la X
  const [turn, setTurn] = useState(()=>{
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.x
  })
  //null no hay ganador, false hay un empate
  const [winner, setWinner] = useState(null)

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.x)
    setWinner(null)

    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
  }


  //creamos la funcion 'updateBoard' y le pasamos el indice para saber en que posicion dibujar
  const updateBoard = (index) => {
    //no actualiza si hay algo en esa posicion
    if (board[index] || winner) return

    //actualiza el tablero creando una copia a newBoard
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    //validamos cual es el siguiente turno y lo actualizamos 
    const newTurn = turn === TURNS.x ? TURNS.o : TURNS.x
    setTurn(newTurn)

    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', newTurn)

    //revisar si hay un ganador
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      conffetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }

  return (
    <main className='board'>
      <h1>TIC TAC TOE</h1>
      <button onClick={resetGame}>Reset Game</button>

      <section className='game'>
        {
          board.map((square, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {square}
              </Square>
            )
          })
        }
      </section>

      <section className='turn'>
        <Square isSelected={turn === TURNS.x}>
          {TURNS.x}
        </Square>
        <Square isSelected={turn === TURNS.o}>
          {TURNS.o}
        </Square>
      </section>

      <WinnerModal 
        resetGame={resetGame} j
        winner={winner}
      />

    </main>
  )
}

export default App
