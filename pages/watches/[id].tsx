import { gql, useQuery } from "@apollo/client";
import { useRouter } from 'next/router'

const GET_WATCH = gql`
    query GetProduct($id: ID!) {
        product(id: $id, channel: "default-channel") {
            id
            name
        }
    }
`;

export const Country = () => {
    const router = useRouter()
    const { id } = router.query

    const { loading, data } = useQuery(GET_WATCH, {
        variables: { id }
    });

    return (
        <>
            {loading && <p>loading...</p>}
            {!loading && <div>
                <h1>{ data.product.name }</h1>
            </div>}
        </>
    )
}

export default Country;
