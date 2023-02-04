import styles from './ProductHero.module.scss'

export const ProductHero = ({ children }) => {
    return (
        <section className={styles.productHero}>
            {children}
        </section>
    )
}