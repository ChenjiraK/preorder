interface MainProductInterface {
    name: string | null,
    model: ModelInterface[]
}
interface ModelInterface {
    color: string | null
    color_hex: string | null
    data: DataModelInterface[]
}
interface DataModelInterface {
    readonly id: number
    name: string | null
    model_name: string | null
    imageUrl: string | null
    size: string | null
    price: number
    price_deposit: number
    images: string[]
    condition_html: string | null
    force_bundle: number
    priority: number
    footer_html: string | null
    preview_html: string | null
    variant_product: string[]
    active: boolean
}
