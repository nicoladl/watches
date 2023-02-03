import {gql} from "@apollo/client";

export const GET_WATCH = gql`
    query GetProduct($id: ID!) {
        product(
            id: $id,
            channel: "default-channel"
        ) {
            id
            name
            description
            thumbnail(size: 500) {
                url
                alt
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
`;