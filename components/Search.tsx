import {useLazyQuery} from "@apollo/client";
import {pageItemsLength} from "@/pages/watches";
import {GET_WATCHES} from "@/graphql/products/queries";
import {useEffect, useState} from "react";

export const Search = ({ setProducts }) => {
    const [searchQuery, setSearchQuery] = useState('')
    const [getProducts, { called, loading, data }] = useLazyQuery(GET_WATCHES);

    const onInputChange = (event: any) => {
        setSearchQuery(event.target.value)

        // todo: refactor variables
        getProducts({
            variables: {
                first: pageItemsLength,
                last: pageItemsLength,
                direction: 'ASC',
                searchQuery: event.target.value,
                after: '',
                before: '',
                stockAvailability: 'IN_STOCK'
            },
        })
    }

    useEffect(() => {
        if (called && !loading) {
            setProducts(data.products)
        }
    }, [called, loading])

    return (
        <input
            onChange={onInputChange}
            onInput={onInputChange}
            value={searchQuery}
        />
    )
}