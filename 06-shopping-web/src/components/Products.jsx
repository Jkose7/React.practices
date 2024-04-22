import './Products.css'
import { AddToCartIcon } from "./Icons";

// eslint-disable-next-line react/prop-types
export function Products({ products }) {
    return (
        <main className='products'>
            <ul>
                {
                    products?.map(({ id, title, description, price, thumbnail }) => (
                        <li key={id}>
                            <img src={thumbnail} alt={title} />
                            <div>
                                <h1>{title}</h1>
                                <p>{description}</p>
                            </div>
                            <div>
                                <p>${price}</p>
                                <button>
                                    <AddToCartIcon></AddToCartIcon>
                                </button>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </main>
    )
}


