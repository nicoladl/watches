import {useQuery} from "@apollo/client";
import {pageItemsLength} from "@/pages/watches";
import {GET_PREV_WATCHES} from "@/graphql/products/queries";
import styles from './PaginationButton.module.css'

export const PaginationPrev = ({ hasPreviousPage, startCursor, setProducts }) => {
    const { loading, data, fetchMore } = useQuery(GET_PREV_WATCHES, {
        variables: { last: pageItemsLength, before: startCursor },
    });
    const onPrevPage = () => {
        fetchMore({
            variables: { before: startCursor },
            updateQuery: (previousQueryResult, { fetchMoreResult }) => {
                setProducts(fetchMoreResult.products)
            }
        })
    }

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