//creamos componente square
import PropTypes from 'prop-types'


export const Square = ({ children, updateBoard, isSelected, index }) => {

    //si 'isSelected' es true agregamos la clase is-selected
    const classTurnSelected = `square ${isSelected ? 'is-selected' : ''}`
  
    //cada que demos click ejecutaremos 'updateBoard' y le pasamos el index
    const handleClick = () => {
      updateBoard(index)
    }
  
    //devolvemos un div y dentro el children que puede ser 'x' o 'o'
    return (
      <div onClick={handleClick} className={classTurnSelected}>
        {children}
      </div>
    )
}

Square.propTypes = {
  children: PropTypes.node,
  updateBoard: PropTypes.any,
  isSelected: PropTypes.bool,
  index: PropTypes.number
}

