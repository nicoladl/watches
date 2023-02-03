import {useQuery} from "@apollo/client";
import {GET_WATCHES} from "@/graphql/products/queries";
import {useState} from "react";
import {pageItemsLength} from "@/pages/watches";
import {Simulate} from "react-dom/test-utils";
import select = Simulate.select;

const directions = {
    ASC: 'ASC',
    DESC: 'DESC',
}

export const Direction = ({ setProducts }) => {
    const { ASC, DESC } = directions
    const [direction, setDirection] = useState(ASC)

    const { fetchMore } = useQuery(GET_WATCHES, {
        variables: { first: pageItemsLength, last: pageItemsLength, direction: 'ASC', searchQuery: '', after: '', before: '' },
    });
    const toggleDirection = () => {
        const newDirection = direction === ASC ? DESC : ASC

        fetchMore({
            variables: { direction: newDirection },
            updateQuery: (previousQueryResult, { fetchMoreResult }) => {
                setProducts(fetchMoreResult.products)
            }
        })
        setDirection(newDirection)
    }

    return (
        <>
            <select onChange={toggleDirection}>
                {Object.values(directions).map(direction => (
                    <option key={direction} value={direction}>{direction}</option>
                ))}
            </select>
        </>
    )
}