import {useLazyQuery} from "@apollo/client";
import {GET_WATCHES} from "@/graphql/products/queries";
import {useEffect, useState} from "react";
import {pageItemsLength} from "@/pages/watches";
import {Simulate} from "react-dom/test-utils";
import select = Simulate.select;

const availabilities = {
    IN_STOCK: 'IN_STOCK',
    OUT_OF_STOCK: 'OUT_OF_STOCK',
}

const availabilitiesLabels = {
    IN_STOCK: 'In Stock',
    OUT_OF_STOCK: 'Out of stock'
}

export const Availability = ({ setProducts }) => {
    const { IN_STOCK, OUT_OF_STOCK } = availabilities
    const [availability, setAvailability] = useState(IN_STOCK)

    const [getProducts, { called, loading, data }] = useLazyQuery(GET_WATCHES);

    const toggleAvailability = () => {
        const stockAvailability = availability === IN_STOCK ? OUT_OF_STOCK : IN_STOCK

        // todo: refactor variables
        getProducts({
            variables: {
                first: pageItemsLength,
                last: pageItemsLength,
                direction: 'ASC',
                searchQuery: '',
                after: '',
                before: '',
                stockAvailability: stockAvailability
            },
        })
        setAvailability(stockAvailability)
    }

    useEffect(() => {
        if (called && !loading) {
            setProducts(data.products)
        }
    }, [called, loading])

    return (
        <>
            <select onChange={toggleAvailability}>
                {Object.values(availabilities).map(availability => (
                    <option key={availability} value={availability}>{availabilitiesLabels[availability]}</option>
                ))}
            </select>
        </>
    )
}