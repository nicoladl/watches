import styles from './SortingContainer.module.css'

export const SortingContainer = ({ children }) => {
    return (
        <div className={styles.sortingContainer}>
            {children}
        </div>
    )
}