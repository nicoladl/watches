import { useQuery } from "@apollo/client";
import { useRouter } from 'next/router'
import {GET_WATCH} from "@/graphql/product/queries";
import {Main} from "@/layouts/main";
import {ProductHero} from "@/components/ProductHero";
import {ProductContainer} from "@/components/ProductContainer";
import {ProductCard} from "@/components/ProductCard";
import {BuyAction} from "@/components/BuyAction";
import {HeroContent} from "@/components/HeroContent";
import {ProductNameLarge} from "@/components/ProductNameLarge";
import {Loading} from "@/components/Loading";

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
                        <HeroContent>
                            <h1>
                                <ProductNameLarge name={data.product.name} />
                            </h1>
                            <div>
                                <h4>Brand name colorful tribute to the original superocean</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vestibulum arcu ac odio suscipit, non sollicitudin turpis cursus.</p>
                            </div>
                        </HeroContent>

                        <ProductContainer>
                            <ProductCard
                                id={data.product.id}
                                name={data.product.name}
                                pricing={data.product.pricing}
                            >
                                <BuyAction id={data.product.id}/>
                            </ProductCard>
                        </ProductContainer>
                    </ProductHero>
                </article>
            ) : <Loading/>}
        </Main>
    )
}

export default Country;
