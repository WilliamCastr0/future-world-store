import { env } from "app/config/env"
import { shopifyUrls } from "./urls"

export const getProducts = async () => {
    try {
        const response = await fetch(shopifyUrls.products.all, {
            headers: {
                'X-Shopify-Access-Token': env.SHOPIFY_TOKEN
            }
        })
        const { products } = await response.json()
        return products

    } catch (error) {
        alert(error)
    }
}