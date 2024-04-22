import { products as withProducts } from './mooks/products.json'
import { Products } from './components/Products'
import { useState } from 'react'
import { Header } from './components/Header'

function App() {

  //Manejar los productos que recibe
  //Objeto con los filtros deseados
  ////contiene catogoria y precio minimo
  const [products] = useState(withProducts)
  const [filters, setFilter] = useState({
    category: 'all',
    minPrice: 0,
  })


  //sistema de filtrado de productos
  //recibe los productos y retorna el producto que 
  //cumpla con las condiciones
  const filterProducts = (products) =>{
    return products.filter(product =>{
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

  const filteredProducts = filterProducts(products)

  return (
    <main>
      <Header changeFilter={setFilter}/>
      <Products products={filteredProducts}></Products>
    </main>
  )
}

export default App
