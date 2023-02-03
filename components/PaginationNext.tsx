import {useQuery} from "@apollo/client";
import {pageItemsLength} from "@/pages/watches";
import {GET_NEXT_WATCHES} from "@/graphql/products/queries";
import styles from './PaginationButton.module.css'

export const PaginationNext = ({ hasNextPage, endCursor, setProducts }) => {
    const { loading, data, fetchMore } = useQuery(GET_NEXT_WATCHES, {
        variables: { first: pageItemsLength, after: endCursor },
    });
    const onNextPage = () => {
        fetchMore({
            variables: { after: endCursor },
            updateQuery: (previousQueryResult, { fetchMoreResult }) => {
                setProducts(fetchMoreResult.products)
            }
        })
    }

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