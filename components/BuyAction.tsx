import styles from './BuyAction.module.scss'
import {IProductId} from "@/Interfaces/IProduct";

export const BuyAction = ({ id }: IProductId) => {
    const buyAction = () => {
        console.log(`buy product ${id}`)
    }

    return (
        <button className={styles.buyAction} onClick={buyAction}>Add to bag</button>
    )
}