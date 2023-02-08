import logo from "@/img/brandLogo.png";
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
                alt='Brand name'
                width={200}
            />
        </Link>
    )
}