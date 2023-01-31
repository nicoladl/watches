import { IProduct } from "@/pages/Interfaces/IProduct";
import { Watch } from "@/pages/components/Watch";

export const WatchesList = ({ products }: { [key: string]: Array<IProduct> }) => {
    return (
        <ul>
            {products.map(({ node }) => {
                const { id, name } = node
                return (
                    <li key={id}>
                        <Watch
                            id={id}
                            name={name}
                        />
                    </li>
                )})}
        </ul>
    )
}