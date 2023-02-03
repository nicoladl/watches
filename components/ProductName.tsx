import {IProductName} from "@/Interfaces/IProduct";
import styles from './ProductName.module.css'

export const ProductName = ({ name }: { [key: string]: IProductName }) => {
    return (
        <h2 className={styles.productName}>{name}</h2>
    )
}