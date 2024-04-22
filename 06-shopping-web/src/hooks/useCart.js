import { useContext } from "react"
import { cartContext } from "../context/cartContext"

export const useCart = () => {
    const context = useContext(cartContext)

    if(context === undefined) {
        throw new Error('this component cant not acces to cartContext')
    }

    return context
}