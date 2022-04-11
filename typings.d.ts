export interface Item {
    _id: string
    title: string
    author: {
        name: string
        image: string
    }
    description: string
    mainImage: {
        asset: {
            url: string
        }
    }
    price: string
    slug: {
        current: string
    }
}