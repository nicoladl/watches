import {IProduct} from "@/pages/Interfaces/IProduct";

export const ProductsListItem = ({ id, name }: IProduct) => {
    return (
        <h3>
            <a href={`/watches/${id}`}>{name}</a>
        </h3>
    )
}