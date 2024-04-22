import { useContext } from "react"
import { filterContext } from "../context/filterContext"
import { products as withProducts } from '../mooks/products.json'


export const useFilters = () => {
    //usamos el contexto que provee
    const { filters, setFilter } = useContext(filterContext)
    
    //sistema de filtrado de productos
    //recibe los productos y retorna el producto que 
    //cumpla con las condiciones
    const filterProducts = (products) => {
      return products.filter(product => {
        //que el precio del producto sea mayor
        //al indicado en los filtros 
        //que la categoria sea 'all' o que sea igual
        //a la que indica el filtro
        return (
          product.price >= filters.minPrice &&
          (
            filters.category === 'all' ||
            product.category === filters.category
          )
        )
      })
    }
  
    const filteredProducts = filterProducts(withProducts)

    return { filters, products: filteredProducts, setFilter }
  
  }
  