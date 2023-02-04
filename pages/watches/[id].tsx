import { useQuery } from "@apollo/client";
import { useRouter } from 'next/router'
import {GET_WATCH} from "@/graphql/product/queries";
import {ProductPrice} from "@/components/ProductPrice";
import Image from "next/image";
import {Main} from "@/layouts/main";

import productImageEven from "@/img/a233112a1a1x1-top-time-deus-soldier.png";
import productImageOdd from "@/img/ab01383b1g1p1-navitimer-b01-chronograph-43-boeing-747-soldier.png";
import {ProductName} from "@/components/ProductName";
import {ProductHero} from "@/components/ProductHero";
import {ProductContainer} from "@/components/ProductContainer";
import {ProductCard} from "@/components/ProductCard";
import {BuyAction} from "@/components/BuyAction";

export const Country = () => {
    const router = useRouter()
    const { id } = router.query

    const { loading, data } = useQuery(GET_WATCH, {
        variables: { id }
    });

    return (
        <Main>
            {!loading ? (
                <article>
                    <ProductHero>
                        <div>
                            <h1>
                                <ProductName name={data.product.name} />
                            </h1>
                            <ProductPrice pricing={data.product.pricing}/>
                        </div>

                        <ProductContainer>
                            <ProductCard
                                id={data.product.id}
                                name={data.product.name}
                                pricing={data.product.pricing}
                            >
                                <BuyAction/>
                            </ProductCard>
                        </ProductContainer>
                    </ProductHero>
                </article>
            ) : <p>loading...</p>}
        </Main>
    )
}

export default Country;
