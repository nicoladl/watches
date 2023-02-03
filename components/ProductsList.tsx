import {INode, IProducts} from "@/pages/Interfaces/IProduct";
import { ProductsListItem } from "@/components/ProductsListItem";
import styles from './ProductsList.module.css'

export const ProductsList = ({ products }: IProducts) => {
    return (
        <ul className={styles.list}>
            {products.map(({ node }: INode) => {
                const { id, name, pricing } = node
                return (
                    <ProductsListItem
                        key={id}
                        id={id}
                        name={name}
                        pricing={pricing}
                    />
                )})}
        </ul>
    )
}