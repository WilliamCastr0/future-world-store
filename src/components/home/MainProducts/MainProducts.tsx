import Image from "next/image"

import styles from './MainProducts.module.sass'

export interface Products {
    id: number;
    title: string;
    price: number;
    description: string;
    images: string[];
    creationAt: Date;
    updatedAt: Date;
    category: Category;
}

export interface Category {
    id: number;
    name: string;
    image: string;
    creationAt: Date;
    updatedAt: Date;
}

const getProducts = async () => {
    try {
        const response = await fetch(`${process.env.SHOPIFY_HOSTNAME}/admin/api/2023-10/products.json`, {
            headers: {
                'X-Shopify-Access-Token': process.env.SHOPIFY_API_KEY || ""
            }
        })
        const { products } = await response.json()
        return products

    } catch (error) {
        alert(error)
    }
}

export const MainProducts = async () => {
    const products = await getProducts()

    return (
        <section className={styles.MainProducts}>
            <h3>🎉 New products became!</h3>
            <div className={styles.MainProducts__grid}>
                {products?.map((product: Products) => {
                    const imageSrc = product.images[0]
                    return (
                        <article key={product.id}>
                            <p>{product.title}</p>
                            <Image src={imageSrc} fill alt={product.title} loading="eager" />
                        </article>
                    )
                })}
            </div>
        </section>
    )
}
