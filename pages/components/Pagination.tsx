import styles from './Pagination.module.css'

export const Pagination = ({ children }) => {
    return (
        <div className={styles.pagination}>
            {children}
        </div>
    )
}