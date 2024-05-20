export class MainProductModel {
    name:string | null
    model: ProductModel[]

    constructor(response: MainProductInterface){
        this.name = response.name || null
        this.model = []
        for(let item of response.model){
            this.model.push(new ProductModel(item))
        }
    }
}
export class ProductModel {
    color: string | null
    colorHex: string | null
    data: DataModel[]
    constructor(response: ModelInterface){
        this.color = response.color
        this.colorHex = response.color_hex
        this.data = []
        for(let item of response.data){
            this.data.push(new DataModel(item))
        }
    }
}
export class DataModel {
    name: string | null
    modelName: string | null
    imageUrl: string | null
    size: string | null
    price: number
    priceDeposit: number
    images: string[]
    conditionHtml: string | null
    forceBundle: number
    priority: number
    footerHtml: string | null
    previewHtml: string | null
    variantProduct: string[]
    active: boolean
    constructor(data: DataModelInterface){
        this.name = data.name || null
        this.modelName = data.model_name || null
        this.imageUrl = data.image_url || null
        this.size = data.size || null
        this.price = data.price || 0
        this.priceDeposit = data.price_deposit || 0
        this.conditionHtml = data.condition_html || null
        this.forceBundle = data.force_bundle || 0
        this.priority = data.priority || 0
        this.footerHtml = data.footer_html || null
        this.previewHtml = data.preview_html || null
        this.active = data.active || false

        this.images = data.images || []
        this.variantProduct = data.variant_product || []
    }
}
