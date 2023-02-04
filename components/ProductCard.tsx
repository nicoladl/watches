import {IProduct} from "@/Interfaces/IProduct";
import Image from "next/image";
import styles from './ProductCard.module.scss'
import {ProductId} from "@/components/ProductId";
import {ProductName} from "@/components/ProductName";
import {ProductPrice} from "@/components/ProductPrice";

import productImageEven from '../img/a233112a1a1x1-top-time-deus-soldier.png'
import productImageOdd from '../img/ab01383b1g1p1-navitimer-b01-chronograph-43-boeing-747-soldier.png'

export const ProductCard = ({ id, name, pricing, children }: IProduct) => {
    return (
        <article className={styles.productCard}>
            <Image
                src={name.length % 2 == 0 ? productImageEven : productImageOdd}
                alt={name}
            />
            <ProductId id={id}/>
            <h3><ProductName name={name}/></h3>
            <ProductPrice pricing={pricing} />

            {children}
        </article>
    )
}