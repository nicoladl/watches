import {IProduct} from "@/pages/Interfaces/IProduct";
import Image from "next/image";
import styles from './ProductCard.module.css'
import {ProductId} from "@/pages/components/ProductId";
import {ProductName} from "@/pages/components/ProductName";
import {ProductPrice} from "@/pages/components/ProductPrice";

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