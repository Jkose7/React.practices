import { useState } from "react"

export function Filters({changeFilter}) {
    const [minPrice, setMinPrice] = useState(0)

    const handleChangePrice = (event) =>{
        setMinPrice(event.target.value)
        changeFilter(prevState => ({
            ...prevState,
            minPrice: event.target.value
        }))
    }

    const handleChangeCategory = (event) =>{
        changeFilter(prevState => ({
            ...prevState,
            category: event.target.value
        }))
    }

    return (
        <section>
            <div>
                <label htmlFor="price">Min price</label>
                <input
                    type="range"
                    id="price"
                    min="0"
                    max="2000"
                    onChange={handleChangePrice}
                />
                <span>${minPrice}</span>
            </div>

            <div>
                <label htmlFor="category">Category</label>
                <select 
                id="category"
                onChange={handleChangeCategory}
                >
                    <option value="all">All</option>
                    <option value="laptops">Laptops</option>
                    <option value="smartphones">Smartphones</option>
                    <option value="fragrances">Fragrances</option>
                    <option value="skincare">Skincare</option>
                </select>
            </div>
        </section>

    )
}