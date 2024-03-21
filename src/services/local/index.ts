import { localUrls } from "./urls"

export const getProducts = async () => {
    try {
        const response = await fetch(localUrls.products.all)
        const { products } = await response.json()
        return products
    } catch (error) {
        alert(error)
    }
}