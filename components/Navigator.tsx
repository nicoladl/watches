import styles from './Navigator.module.scss'
import Image from "next/image";
import logo from "@/img/breitling.svg";
import Link from "next/link";

export const Navigator = () => {
    return (
        <div className={styles.navigator}>

            <a
                href={'/'}
                className={styles.brandLogo}
            >
                <Image src={logo} alt='Breiling 1864' width={100}/>
            </a>

            <ul>
                <li><Link href='/watches'>watches</Link></li>
                <li><a href='#'>straps</a></li>
                <li><a href='#'>care</a></li>
                <li><a href='#'>subscription</a></li>
                <li><a href='#'>service</a></li>
                <li><a href='#'>store</a></li>
                <li><a href='#'>about</a></li>
            </ul>
        </div>
    )
}