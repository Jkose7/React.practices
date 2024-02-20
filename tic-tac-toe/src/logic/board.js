
import {WINNER_COMBOS} from '../constans.js'


export const checkWinner = (boardToCheck) => {
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a]
      }
    }

    return null
}


export const checkEndGame = (newBoard) => {
  //se revisa si no hay espacios vacios
  //si estan llenos con x / o 
  return newBoard.every((square) => square !== null)
}