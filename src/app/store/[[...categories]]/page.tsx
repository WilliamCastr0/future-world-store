interface CategoriesProps {
    params: {
        categories: string[]
        searchParams?: string,
    }
}

export default function Categories(props: CategoriesProps) {
    const { categories } = props.params

    return (
        <main>
            <nav>
                <h1>Category: {categories}</h1>
            </nav>
        </main>
    )
}