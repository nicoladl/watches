import styles from './ProductContainer.module.scss'

export const ProductContainer = ({ children }) => {
    return (
        <section className={styles.productHero}>
            {children}
        </section>
    )
}