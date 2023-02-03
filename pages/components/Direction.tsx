import {useQuery} from "@apollo/client";
import {GET_WATCHES} from "@/graphql/products/queries";
import {useState} from "react";
import {pageItemsLength} from "@/pages/watches";

export const directionMap = {
    ASC: 'ASC',
    DESC: 'DESC',
}

export const Direction = ({ setProducts }) => {
    const { ASC, DESC } = directionMap
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
        <button onClick={toggleDirection}>Order ASC/DESC</button>
    )
}