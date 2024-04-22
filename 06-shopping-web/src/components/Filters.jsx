import { useId } from "react"
import { useFilters } from "../hooks/useFilters"


export function Filters() {

    //llamamos el set filter
    const {filters, setFilter } = useFilters()
    
    //usamos useId para identificar los inputs unicamente
    const minPriceFilterId = useId()
    const categoryFilterId= useId()

    //manejamos el valor que recibe el minPrice
    const handleChangePrice = (event) =>{
        setFilter(prevState => ({
            ...prevState,
            minPrice: event.target.value
        }))
    }

    //manejamos el valor que recibe category
    const handleChangeCategory = (event) =>{
        setFilter(prevState => ({
            ...prevState,
            category: event.target.value
        }))
    }

    return (
        <section>
            <div>
                <label htmlFor={minPriceFilterId}>Min price</label>
                <input
                    type="range"
                    id={minPriceFilterId}
                    min="0"
                    max="2000"
                    onChange={handleChangePrice}
                    value={filters.minPrice}
                />
                <span>${filters.minPrice}</span>
            </div>

            <div>
                <label htmlFor={categoryFilterId}>Category</label>
                <select 
                id={categoryFilterId}
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