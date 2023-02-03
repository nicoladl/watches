import {IProduct} from "@/Interfaces/IProduct";
import Image from "next/image";
import styles from './ProductCard.module.css'
import {ProductId} from "@/components/ProductId";
import {ProductName} from "@/components/ProductName";
import {ProductPrice} from "@/components/ProductPrice";

import productImage from '../img/ab2030161c1a1-superocean-heritage-b20-automatic-44-soldier.png'

export const ProductCard = ({ id, name, pricing }: IProduct) => {
    return (
        <a href={`/watches/${id}`} title={name}>
            <div className={styles.productCard}>
                <Image
                    className={styles.productCardImage}
                    src={productImage}
                    alt={name}
                />
                <ProductId id={id}/>
                <ProductName name={name}/>
                <ProductPrice pricing={pricing} />
            </div>
        </a>
    )
}