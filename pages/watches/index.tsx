import { ProductsList } from "@/pages/components/ProductsList";
import { gql, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";

const directionMap = {
    ASC: 'ASC',
    DESC: 'DESC',
}
const pageItemsLength = 28

const GET_WATCHES = gql`
    query GetProducts(
        $direction: OrderDirection!,
        $searchQuery: String!,
        $first: Int!
        $after: String!
    ) {
        products(
            first: $first,
            after: $after,
            sortBy: { field: NAME, direction: $direction }
            filter: { search: $searchQuery }
            channel: "default-channel",
        ) {
            edges {
                node {
                    id
                    name
                }
            }
            pageInfo {
                hasNextPage
                hasPreviousPage
                startCursor
                endCursor
            }
        }
    }
`;

export const Index = () => {
    const { ASC, DESC } = directionMap
    const [direction, setDirection] = useState(ASC)
    const [products, setProducts] = useState({
        edges: [],
        pageInfo: {
            endCursor: '',
            startCursor: '',
            hasNextPage: false,
            hasPreviousPage: false,
        }
    })
    const [searchQuery, setSearchQuery] = useState('')

    const { loading, data, fetchMore } = useQuery(GET_WATCHES, {
        variables: { first: pageItemsLength, last: pageItemsLength, direction: ASC, searchQuery, after: '' },
        notifyOnNetworkStatusChange: true,
    });

    useEffect(() => {
        if (!loading) {
            setProducts(data.products)
        }
    }, [loading])

    const onNextPage = () => {
        const { endCursor } = products.pageInfo

        fetchMore({
            variables: { after: endCursor },
            updateQuery: (previousQueryResult, { fetchMoreResult }) => {
                setProducts(fetchMoreResult.products)
            }
        })
    }

    const onPrevPage = () => {
        const { startCursor } = products.pageInfo

        fetchMore({
            variables: { before: startCursor },
            updateQuery: (previousQueryResult, { fetchMoreResult }) => {
                setProducts(fetchMoreResult.products)
            }
        })
    }

    const toggleDirection = () => {
        setDirection(direction === ASC ? DESC : ASC)

        fetchMore({
            variables: { direction },
            updateQuery: (previousQueryResult, { fetchMoreResult }) => {
                setProducts(fetchMoreResult.products)
            }
        })
    }

    const onInputChange = (e: any) => {
        // todo: debounce this
        setSearchQuery(e.target.value)
    }

    // todo: split components
    // todo: offload query logic
    // todo: offload gql
    // todo: figure out if I need Redux
    return (
        <>
            <button onClick={toggleDirection}>Order ASC/DESC</button><br />
            <input onChange={onInputChange}/>
            {!loading ? (
                <>
                    <ProductsList products={products.edges}/>
                    <button disabled={!products.pageInfo.hasPreviousPage} onClick={onPrevPage}>prev page</button>
                    <button disabled={!products.pageInfo.hasNextPage} onClick={onNextPage}>next page</button>
                </>
            ) : <p>loading...</p>}
        </>
    )
}

export default Index;
