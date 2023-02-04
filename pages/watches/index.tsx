import { ProductsList } from "@/components/ProductsList";
import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import {PaginationNext} from "@/components/PaginationNext";
import {PaginationPrev} from "@/components/PaginationPrev";
import {GET_WATCHES} from "@/graphql/products/queries";
import {SortingContainer} from "@/components/SortingContainer";
import {Direction} from "@/components/Direction";
import {FiltersContainer} from "@/components/FiltersContainer";
import {Pagination} from "@/components/Pagination";
import {Search} from "@/components/Search";
import {Navigator} from "@/components/Navigator";
import {BrandLogo} from "@/components/BrandLogo";
import {Main} from "@/layouts/main";
import {Availability} from "@/components/Availability";
import {PriceRange} from "@/components/PriceRange";
import {ProductsSwitch} from "@/components/ProductsSwitch";
import {Loading} from "@/components/Loading";

export const pageItemsLength = 28

export const Index = () => {
    const [products, setProducts] = useState({
        edges: [],
        pageInfo: {
            endCursor: '',
            startCursor: '',
            hasNextPage: false,
            hasPreviousPage: false,
        },
        totalCount: 0,
    })

    const { loading, data } = useQuery(GET_WATCHES, {
        variables: { first: pageItemsLength, last: pageItemsLength, direction: 'ASC', searchQuery: '', after: '', before: '' },
    });

    useEffect(() => {
        if (!loading) {
            setProducts(data.products)
        }
    }, [loading])

    // todo: implement cache strategy
    // todo: figure out if I need Redux

    // todo: build pagination calculations
    return (
        <Main>

            <FiltersContainer>
                <SortingContainer>
                    <Direction setProducts={setProducts}/>
                    <Availability setProducts={setProducts}/>
                </SortingContainer>

                <Search setProducts={setProducts} />
            </FiltersContainer>

            {!loading ? (
                <>
                    <ProductsSwitch products={products.edges}>
                        <ProductsList products={products.edges}/>
                        <Pagination>
                            <PaginationPrev
                                hasPreviousPage={products.pageInfo.hasPreviousPage}
                                startCursor={products.pageInfo.startCursor}
                                setProducts={setProducts}
                            />
                            <PaginationNext
                                hasNextPage={products.pageInfo.hasNextPage}
                                endCursor={products.pageInfo.endCursor}
                                setProducts={setProducts}
                            />
                        </Pagination>
                    </ProductsSwitch>
                </>
            ) : <Loading />}
        </Main>
    )
}

export default Index;
