import {useLazyQuery} from "@apollo/client";
import {pageItemsLength} from "@/pages/watches";
import {GET_NEXT_WATCHES} from "@/graphql/products/queries";
import {useEffect} from "react";
import styles from './PaginationButton.module.css'

export const PaginationNext = ({ hasNextPage, endCursor, setProducts }) => {
    const [getProducts, { called, loading, data }] = useLazyQuery(GET_NEXT_WATCHES);

    const onNextPage = () => {
        console.log(endCursor)
        // todo: refactor variables
        getProducts({
            variables: {
                first: pageItemsLength,
                last: pageItemsLength,
                direction: 'ASC',
                searchQuery: '',
                after: endCursor,
                before: '',
                stockAvailability: 'IN_STOCK'
            },
        })
    }

    useEffect(() => {
        if (called && !loading) {
            console.log('qui')
            setProducts(data.products)
        }
    }, [called, loading])

    return (
        <button
            className={styles.paginationButton}
            disabled={!hasNextPage}
            onClick={onNextPage}
        >
            next
        </button>
    )
}