import { useQuery } from "@apollo/client";
import { useRouter } from 'next/router'
import {GET_WATCH} from "@/graphql/product/queries";
import {ProductPrice} from "@/components/ProductPrice";
import Image from "next/image";
import {Main} from "@/layouts/main";

import productImageEven from "@/img/a233112a1a1x1-top-time-deus-soldier.png";
import productImageOdd from "@/img/ab01383b1g1p1-navitimer-b01-chronograph-43-boeing-747-soldier.png";

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
                        src={data.product.name.length % 2 == 0 ? productImageEven : productImageOdd}
                        alt={data.product.name}
                    />
                </div>
            ) : <p>loading...</p>}
        </Main>
    )
}

export default Country;
