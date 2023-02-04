import {useQuery} from "@apollo/client";
import {GET_WATCHES} from "@/graphql/products/queries";
import {useState} from "react";
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

    const { fetchMore } = useQuery(GET_WATCHES, {
        variables: {
            first: pageItemsLength,
            last: pageItemsLength,
            direction: 'ASC',
            searchQuery: '',
            after: '',
            before: '',
            stockAvailability: IN_STOCK
        },
    });
    const toggleAvailability = () => {
        const newAvailability = availability === IN_STOCK ? OUT_OF_STOCK : IN_STOCK

        fetchMore({
            variables: { stockAvailability: newAvailability },
            updateQuery: (previousQueryResult, { fetchMoreResult }) => {
                setProducts(fetchMoreResult.products)
            }
        })
        setAvailability(newAvailability)
    }

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