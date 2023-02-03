import {useQuery} from "@apollo/client";
import {pageItemsLength} from "@/pages/watches";
import {GET_WATCHES} from "@/graphql/products/queries";
import {useState} from "react";

export const Search = ({ setProducts }) => {
    const [searchQuery, setSearchQuery] = useState('')

    const { loading, data, fetchMore } = useQuery(GET_WATCHES, {
        variables: { first: pageItemsLength, last: pageItemsLength, direction: 'ASC', searchQuery, after: '', before: '' },
    });

    const onInputChange = (event: any) => {
        fetchMore({
            variables: { searchQuery: event.target.value },
            updateQuery: (previousQueryResult, { fetchMoreResult }) => {
                setProducts(fetchMoreResult.products)
            }
        })
        setSearchQuery(event.target.value)
    }

    return (
        <input
            onChange={onInputChange}
            onInput={onInputChange}
            value={searchQuery}
        />
    )
}