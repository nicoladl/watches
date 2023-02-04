import styles from './HeroContent.module.scss'
export const HeroContent = ({ children }) => {
    return (
        <div className={styles.heroContent}>
            {children}
        </div>
    )
}