import {IProductName} from "@/Interfaces/IProduct";
import styles from './ProductName.module.css'

export const ProductName = ({ name }: { [key: string]: IProductName }) => {
    return (
        <span className={styles.productName}>{name}</span>
    )
}