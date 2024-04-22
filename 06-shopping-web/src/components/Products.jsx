import '../css/Products.css'
import { useCart } from '../hooks/useCart';
import { useFilters } from '../hooks/useFilters';
import { AddToCartIcon, RemoveFromCartIcon } from "./Icons";

// eslint-disable-next-line react/prop-types
export function Products() {
    const { products } = useFilters()
    const { cart, addToCart, removeToCart } = useCart()

    const productInCart = (product) => {
        return cart.some(item => item.id === product.id)
    }

    return (
        <main className='products'>
            <ul>
                {
                    products?.map(product => {

                        const isProductInCart = productInCart(product)

                        return (
                            <li key={product.id}>
                                <img src={product.thumbnail} alt={product.title} />
                                <div>
                                    <h1>{product.title}</h1>
                                    <p>{product.description}</p>
                                </div>
                                <div>
                                    <p>${product.price}</p>

                                    {
                                        isProductInCart ?
                                            <button
                                                onClick={() => removeToCart(product)}
                                            >
                                                <RemoveFromCartIcon />
                                            </button>

                                            :

                                            <button
                                                onClick={() => addToCart(product)}
                                            >
                                                <AddToCartIcon />
                                            </button>
                                    }
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </main>
    )
}


