import '../css/Cart.css'
import { useId } from 'react'
import { CartIcon, ClearCartIcon } from './Icons'
import { useCart } from '../hooks/useCart'

function CartItem({ thumbnail, title, price, quantity, addToCart }) {
    return (
        <ul>
            <li>
                <img
                    src={thumbnail}
                    alt={title}
                />
                <div>
                    <strong>{title}</strong> - {price}
                </div>

                <footer>
                    <small>
                        Qty: {quantity}
                    </small>
                    <button
                        onClick={addToCart}
                    >
                        +
                    </button>
                </footer>
            </li>
        </ul>
    )
}


export function Cart() {
    const cartCheckboxId = useId()
    const { cart, clearCart, addToCart } = useCart()

    return (
        <>
            <label className='cart-button' htmlFor={cartCheckboxId}>
                <CartIcon />
            </label>
            <input id={cartCheckboxId} type='checkbox' hidden />

            <aside className='cart'>
                {
                    cart?.map(product => (
                        <CartItem
                            key={product.id}
                            addToCart={() => addToCart(product)}
                            {...product}
                        />

                    ))
                }

                <button onClick={clearCart}>
                    <ClearCartIcon />
                </button>
            </aside>
        </>
    )
}