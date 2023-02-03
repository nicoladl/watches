import {IProduct} from "@/Interfaces/IProduct";
import {ProductCard} from "@/components/ProductCard";
import styles from './ProductsListItem.module.scss'

export const ProductsListItem = ({ id, name, pricing }: IProduct) => {
    return (
        <li key={id} className={styles.productItem}>
            <ProductCard
                id={id}
                name={name}
                pricing={pricing}
            />
        </li>
    )
}