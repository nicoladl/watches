import {IProduct} from "@/pages/Interfaces/IProduct";
import {ProductCard} from "@/pages/components/ProductCard";
import styles from './ProductsListItem.module.css'

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