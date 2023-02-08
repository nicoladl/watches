import styles from './Navigator.module.scss'
import Image from "next/image";
import logo from "@/img/brandLogo.png";
import Link from "next/link";

export const Navigator = () => {
    return (
        <header className={styles.navigator}>
            <Link
                className={styles.brandLogo}
                href={'/watches'}
            >
                <Image src={logo} alt='Brand name' width={100}/>
            </Link>

            <nav className={styles.nav}>
                <Link className={styles.navItem} href='/watches'>watches</Link>
                <a className={styles.navItem} href='#'>straps</a>
                <a className={styles.navItem} href='#'>care</a>
                <a className={styles.navItem} href='#'>subscription</a>
                <a className={styles.navItem} href='#'>service</a>
                <a className={styles.navItem} href='#'>store</a>
                <a className={styles.navItem} href='#'>about</a>
            </nav>
        </header>
    )
}