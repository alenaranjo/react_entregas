import React, { useState } from "react";
import { Item } from "../Item/Item";
import { Filter } from "./Filter";

const ProductFiltered = ({ productos }) => {
    const [filterState, setFilterState] = useState('')

    const handleFilterChange = (event) => {
        setFilterState(event.target.value.toLowerCase());
    };

    return (
        <>
            <div>
                <input
                    className="form-control"
                    type="text"
                    value={filterState}
                    onChange={handleFilterChange}
                    placeholder="Buscar"
                />
            </div>
            <br />
            <div className="myCard">
                {filterState === ''
                    ? productos.map((product) => (
                        <Item key={product.id} product={product} />
                    ))
                    : productos
                        .filter((prod) =>
                            prod.name.toLowerCase().includes(filterState)
                        )
                        .map((product) => (
                            <Item key={product.id} product={product} />
                        ))}
            </div>
        </>
    );
};

export const ItemList = ({ productos }) => (
    <Filter productos={productos}>
        {ProductFiltered}
    </Filter>
);

