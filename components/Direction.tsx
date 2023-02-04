import {useLazyQuery} from "@apollo/client";
import {GET_WATCHES} from "@/graphql/products/queries";
import {useEffect, useState} from "react";
import {pageItemsLength} from "@/pages/watches";
import {Simulate} from "react-dom/test-utils";
import select = Simulate.select;

const directions = {
    ASC: 'ASC',
    DESC: 'DESC',
}

const directionsLabels = {
    ASC: 'Ascending',
    DESC: 'Descending',
}

export const Direction = ({ setProducts }) => {
    const { ASC, DESC } = directions
    const [direction, setDirection] = useState(ASC)

    const [getProducts, { called, loading, data }] = useLazyQuery(GET_WATCHES);

    const toggleDirection = () => {
        const newDirection = direction === ASC ? DESC : ASC

        // todo: refactor variables
        getProducts({
            variables: {
                first: pageItemsLength,
                last: pageItemsLength,
                direction: newDirection,
                searchQuery: '',
                after: '',
                before: '',
                stockAvailability: 'IN_STOCK'
            },
        })
        setDirection(newDirection)
    }

    useEffect(() => {
        if (called && !loading) {
            setProducts(data.products)
        }
    }, [called, loading])

    return (
        <>
            <select onChange={toggleDirection}>
                {Object.values(directions).map(direction => (
                    <option key={direction} value={direction}>{directionsLabels[direction]}</option>
                ))}
            </select>
        </>
    )
}