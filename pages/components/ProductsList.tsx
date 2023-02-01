import {INode, IProducts} from "@/pages/Interfaces/IProduct";
import { ProductsListItem } from "@/pages/components/ProductsListItem";

export const ProductsList = ({ products }: IProducts) => {
    return (
        <ul>
            {products.map(({ node }: INode) => {
                const { id, name } = node
                return (
                    <li key={id}>
                        <ProductsListItem
                            id={id}
                            name={name}
                        />
                    </li>
                )})}
        </ul>
    )
}