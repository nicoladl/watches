import {gql} from "@apollo/client";

export const GET_NEXT_WATCHES = gql`
    query GetProducts($first: Int, $after: String) {
        products(
            first: $first,
            after: $after,
            sortBy: { field: NAME, direction: ASC }
            channel: "default-channel"
        ) {
            edges {
                node {
                    id
                    name
                    pricing {
                        priceRange {
                            start {
                                gross {
                                    amount
                                    currency
                                }
                            }
                        }
                    }
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

export const GET_PREV_WATCHES = gql`
    query GetProducts($last: Int, $before: String) {
        products(
            last: $last,
            before: $before,
            sortBy: { field: NAME, direction: ASC }
            channel: "default-channel"
        ) {
            edges {
                node {
                    id
                    name
                    pricing {
                        priceRange {
                            start {
                                gross {
                                    amount
                                    currency
                                }
                            }
                        }
                    }
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

export const GET_WATCHES = gql`
    query GetProducts(
        $direction: OrderDirection!,
        $searchQuery: String!,
        $stockAvailability: StockAvailability,
        $first: Int!
        $lte: Float
        $gte: Float
    ) {
        products(
            first: $first,
            sortBy: { field: NAME, direction: $direction }
            filter: {
                search: $searchQuery,
                stockAvailability: $stockAvailability,
                price: {
                    lte: $lte,
                    gte: $gte,
                }
            }
            channel: "default-channel",
        ) {
            edges {
                node {
                    id
                    name
                    variants {
                        id
                        name
                    }
                    pricing {
                        priceRange {
                            start {
                                gross {
                                    amount
                                    currency
                                }
                            }
                        }
                    }
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