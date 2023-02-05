import styles from './ProductsListItem.module.scss'

export const ProductsListItem = ({ id, name, children }) => {
    return (
        <li className={styles.productListItem}>
            <a href={`/watches/${id}`} title={name}>
                {children}
            </a>
        </li>
    )
}