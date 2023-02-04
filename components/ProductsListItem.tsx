import styles from './ProductsListItem.module.scss'

export const ProductsListItem = ({ children }) => {
    return (
        <li className={styles.productItem}>
            {children}
        </li>
    )
}