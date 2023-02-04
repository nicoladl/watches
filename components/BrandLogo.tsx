import logo from "@/img/breitling.svg";
import Image from "next/image";
import styles from './BrandLogo.module.scss'
import Link from "next/link";

export const BrandLogo = () => {
    return (
        <Link
            className={styles.brandLogo}
            href={'/watches'}
        >
            <Image
                src={logo}
                alt='Breiling 1864'
                width={200}
            />
        </Link>
    )
}