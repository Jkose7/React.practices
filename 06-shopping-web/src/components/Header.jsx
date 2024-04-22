import { Filters } from "./Filters"

export function Header ({changeFilter}) {
    return (
        <header>
            <div>Shopping</div>
            <div>
                <Filters
                changeFilter={changeFilter}
                />
            </div>
        </header>
    )
}