import styles from './SortingContainer.module.scss'

export const SortingContainer = ({ children }) => {
    return (
        <div className={styles.sortingContainer}>
            {children}
        </div>
    )
}