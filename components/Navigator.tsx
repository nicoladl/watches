import styles from './Navigator.module.scss'
import Image from "next/image";
import logo from "@/img/breitling.svg";

export const Navigator = () => {
    return (
        <div className={styles.navigator}>
            <Image src={logo} alt='Breiling 1864' width={100}/>

            <ul>
                <li><a href='#'>watches</a></li>
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