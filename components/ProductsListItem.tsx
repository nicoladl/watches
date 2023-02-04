import styles from './ProductsListItem.module.scss'

export const ProductsListItem = ({ id, name, children }) => {
    return (
        <li className={styles.productItem}>
            <a href={`/watches/${id}`} title={name}>
                {children}
            </a>
        </li>
    )
}