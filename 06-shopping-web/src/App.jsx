import { Products } from './components/Products'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Cart } from './components/Cart'
import { CartProvider } from './context/cartContext'

function App() {
  return (
    <CartProvider>
      <Header/>
      <Cart />
      <Products />
      <Footer/>
    </CartProvider>
  )
}

export default App
