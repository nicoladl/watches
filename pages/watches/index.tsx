import { WatchesList } from "@/pages/components/WatchesList";
import { gql, useQuery } from "@apollo/client";

const GET_WATCHES = gql`
    query GetProducts {
        products(first: 100, channel: "default-channel") {
            edges {
                node {
                    id
                    name
                }
            }
        }
    }
`;

export const Index = () => {
    const { loading, data } = useQuery(GET_WATCHES);

    return (
        <>
            {loading && <p>loading...</p>}
            {!loading && <WatchesList products={data.products.edges}/>}
        </>
    )
}

export default Index;
