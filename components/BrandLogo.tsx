import logo from "@/img/breitling.svg";
import Image from "next/image";
import styles from './BrandLogo.module.scss'

export const BrandLogo = () => {
    return (
        <a
            href={'/'}
            className={styles.brandLogo}
        >
            <Image
                src={logo}
                alt='Breiling 1864'
                width={200}
            />
        </a>
    )
}