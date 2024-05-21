interface MainProductInterface {
    name: string,
    model: ModelInterface[]
}
interface ModelInterface {
    color: string
    color_hex: string
    data: DataModelInterface[]
}
interface DataModelInterface {
    readonly id: number
    name: string
    model_name: string
    image_url: string 
    size: string
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

