export type INode = {
    node: IProduct,
}

export type IProducts = {
    products: Array<INode>,
}

type TaxedMoneyRange = {
    start: TaxedMoney,
    stop: TaxedMoney,
}

type TaxedMoney = {
    net: Money,
    gross: Money,
    tax: Money,
    currency: string,
}

type Money = {
    amount: Float32Array,
    currency: string,
}

type Thumbnail = {
    url: string,
    alt: string,
}

export type IProductId = string
export type IProductName = string

export type IProductPricing = {
    priceRange: TaxedMoneyRange,
    priceRangeUndiscounted: TaxedMoneyRange,
    discount: TaxedMoney,
    onSale: Boolean,
}

export type IProduct = {
    id: IProductId,
    name: IProductName,
    pricing: IProductPricing,
}