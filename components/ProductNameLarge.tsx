import {IProductName} from "@/Interfaces/IProduct";
import styles from './ProductNameLarge.module.scss'

export const ProductNameLarge = ({ name }: { [key: string]: IProductName }) => {
    const [first, ...restName] = name.split(' ')

    return (
        <>
            <span className={styles.productNameLarge}>
                <span>{first}</span> {restName}
            </span>
        </>
    )
}