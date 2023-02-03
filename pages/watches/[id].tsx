import { useQuery } from "@apollo/client";
import { useRouter } from 'next/router'
import {GET_WATCH} from "@/graphql/product/queries";
import {ProductPrice} from "@/components/ProductPrice";
import Image from "next/image";
import productImage from "@/pages/img/ab2030161c1a1-superocean-heritage-b20-automatic-44-soldier.png";
import {Main} from "@/layouts/main";

export const Country = () => {
    const router = useRouter()
    const { id } = router.query

    const { loading, data } = useQuery(GET_WATCH, {
        variables: { id }
    });

    return (
        <Main>
            {!loading ? (
                <div>
                    <h1>{ data.product.name }</h1>
                    <ProductPrice pricing={data.product.pricing}/>
                    <Image
                        src={productImage}
                        alt={data.product.name}
                    />
                </div>
            ) : <p>loading...</p>}
        </Main>
    )
}

export default Country;
