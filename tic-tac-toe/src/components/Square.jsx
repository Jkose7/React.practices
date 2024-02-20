//creamos componente square

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