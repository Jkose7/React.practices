import { createContext, useState } from "react";

//creacion del contexto
export const cartContext = createContext()

//creacion del provider
export function CartProvider({ children }) {
    const [cart, setCart] = useState([])

    const addToCart = product => {
        //comprobar si el producto ya esta en el carrito
        const productInCartIndex = cart.findIndex(item => item.id === product.id)

        if (productInCartIndex >= 0) {
            //struturedClone hace una copia profunda del array
            const newCart = structuredClone(cart)
            newCart[productInCartIndex].quantity += 1
            return setCart(newCart)
        }

        setCart(prevCart => ([
            ...prevCart,
            {
                ...product,
                quantity: 1
            }
        ]))
    }

    const removeToCart = product =>{
        setCart(prevCart => prevCart.filter(item => item.id !== product.id))
    }

    const clearCart = () => {
        setCart([])
    }

    return (
        <cartContext.Provider value={{
            cart,
            addToCart,
            clearCart,
            removeToCart
        }}>
            {children}
        </cartContext.Provider>
    )
}

