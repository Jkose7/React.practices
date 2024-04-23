import { useReducer } from "react"
import { CartInitialState, CartReducer } from "../reducer/cart"

export function useCartReducer() {
    const [state, dispatch] = useReducer(CartReducer, CartInitialState)

    const addToCart = product => dispatch({
        type: 'ADD_TO_CART',
        payload: product
    })

    const removeToCart = product => dispatch({
        type: 'REMOVE_TO_CART',
        payload: product
    })

    const clearCart = () => dispatch({ type: 'CLEAR_CART' })

    return { state, addToCart, removeToCart, clearCart}
}