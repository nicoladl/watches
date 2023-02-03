import { ProductsList } from "@/pages/components/ProductsList";
import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import {PaginationNext} from "@/pages/components/PaginationNext";
import {PaginationPrev} from "@/pages/components/PaginationPrev";
import {GET_WATCHES} from "@/graphql/products/queries";
import {SortingContainer} from "@/pages/components/SortingContainer";
import {Direction} from "@/pages/components/Direction";
import {FiltersContainer} from "@/pages/components/FiltersContainer";
import {Pagination} from "@/pages/components/Pagination";
import {Search} from "@/pages/components/Search";

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
        <>
            <FiltersContainer>
                <SortingContainer>
                    <Direction setProducts={setProducts}/>
                </SortingContainer>

                <Search setProducts={setProducts} />
            </FiltersContainer>

            {!loading ? (
                <>
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
                </>
            ) : <p>loading...</p>}
        </>
    )
}

export default Index;
