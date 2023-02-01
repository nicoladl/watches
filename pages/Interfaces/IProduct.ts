export type INode = {
    node: IProduct,
}

export type IProducts = {
    products: Array<INode>
}

export type IProduct = {
    id: string,
    name: string,
}