import {EmptyState} from "@/components/EmpyState";

export const ProductsSwitch = ({ products, children }) => {
    return (
        products.length > 0 ? (
            <div>
                {children}
            </div>
        ) : <EmptyState/>
    )
}