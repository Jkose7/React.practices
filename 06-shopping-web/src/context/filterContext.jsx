import { createContext } from "react";
import { useState } from "react"

//creacion del contexto que se consume
export const filterContext = createContext()

//componente que provee el acceso al contexto
export function FilterProvider ({children}) {
    const [filters, setFilter] = useState({
        category: 'all',
        minPrice: 0,
      })
    
    return (
        <filterContext.Provider value={{
            filters,
            setFilter
        }}>
            {children}
        </filterContext.Provider>
    )
} 