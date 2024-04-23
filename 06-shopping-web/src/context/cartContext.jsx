import { createContext} from "react";
import { useCartReducer } from "../hooks/useCartReducer";

//creacion del contexto
export const cartContext = createContext()

//creacion del provider
export function CartProvider({ children }) {
    const {  state, addToCart, removeToCart, clearCart } = useCartReducer()

    return (
        <cartContext.Provider value={{
            cart: state,
            addToCart,
            clearCart,
            removeToCart
        }}>
            {children}
        </cartContext.Provider>
    )
}

