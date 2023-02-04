import {INode, IProducts} from "@/Interfaces/IProduct";
import { ProductsListItem } from "@/components/ProductsListItem";
import styles from './ProductsList.module.css'
import {ProductCard} from "@/components/ProductCard";

export const ProductsList = ({ products }: IProducts) => {
    return (
        <ul className={styles.list}>
            {products.map(({ node }: INode) => {
                const { id, name, pricing } = node
                return (
                    <ProductsListItem key={id} id={id} name={name}>
                        <ProductCard
                            id={id}
                            name={name}
                            pricing={pricing}
                        />
                    </ProductsListItem>
                )})}
        </ul>
    )
}