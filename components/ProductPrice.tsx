import { IProductPricing } from "@/Interfaces/IProduct";
import styles from './ProductPrice.module.css'

export const ProductPrice = ({ pricing }: { [key: string]: IProductPricing }) => {
    return (
        <var className={styles.productPrice}>{pricing.priceRange.start.gross.currency} {pricing.priceRange.start.gross.amount}</var>
    )
}