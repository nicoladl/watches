import { IProductId } from "@/pages/Interfaces/IProduct";
import styles from './ProductId.module.css'

export const ProductId = ({ id }: { [key: string]: IProductId }) => {
    return (
        <h4 className={styles.productId}>{id}</h4>
    )
}