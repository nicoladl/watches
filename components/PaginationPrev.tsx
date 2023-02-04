import {useLazyQuery} from "@apollo/client";
import {pageItemsLength} from "@/pages/watches";
import {GET_PREV_WATCHES} from "@/graphql/products/queries";
import {useEffect} from "react";
import styles from './PaginationButton.module.css'

export const PaginationPrev = ({ hasPreviousPage, startCursor, setProducts }) => {
    const [getProducts, { called, loading, data }] = useLazyQuery(GET_PREV_WATCHES);

    const onPrevPage = () => {
        // todo: refactor variables
        getProducts({
            variables: {
                first: pageItemsLength,
                last: pageItemsLength,
                direction: 'ASC',
                searchQuery: '',
                after: '',
                before: startCursor,
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
        <button
            className={styles.paginationButton}
            disabled={!hasPreviousPage}
            onClick={onPrevPage}
        >
            prev
        </button>
    )
}