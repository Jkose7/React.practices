//definimos el estado inicial del reducer
export const CartInitialState = JSON.parse(window.localStorage.getItem('cart')) || []

export const CART_ACTIONS = {
    ADD_TO_CART: 'ADD_TO_CART',
    REMOVE_TO_CART: 'REMOVE_TO_CART',
    CLEAR_CART: 'CLEAR_CART'
}


export const updateLocalStorage = state => {
    window.localStorage.setItem('cart', JSON.stringify(state))
}

//lo que hace el reducer es cambiar el state 
//en base a la action y calcular un nuevo estado
export const CartReducer = (state, action) => {

    //el action tiene dos parametros 
    //type donde pasamos el string para idenficar que debe ejecutar
    //payload que recibe el objeto que necesitamos para actualizar el estado
    const { type, payload } = action
    switch (type) {
        case CART_ACTIONS.ADD_TO_CART: {
            const { id } = payload
            const productInCartIndex = state.findIndex(item => item.id === id)

            if (productInCartIndex >= 0) {
                //struturedClone hace una copia profunda del array
                const newState = structuredClone(state)
                newState[productInCartIndex].quantity += 1

                updateLocalStorage(state)

                return newState
            }

            const newState = [
                ...state,
                {
                    ...payload,
                    quantity: 1
                }
            ]

            updateLocalStorage(newState)
            return newState
        }

        case CART_ACTIONS.REMOVE_TO_CART: {
            const { id } = payload
            const newState = state.filter(item => item.id !== id)
            updateLocalStorage(newState)
            return newState
        }

        case CART_ACTIONS.CLEAR_CART: {
            const newState = window.localStorage.removeItem('cart') || []
            return newState
        }
    }

    return state
}
