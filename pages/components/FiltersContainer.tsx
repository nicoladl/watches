import styles from './FiltersContainer.module.css'

export const FiltersContainer = ({ children }) => {
    return (
        <div className={styles.filtersContainer}>
            {children}
        </div>
    )
}