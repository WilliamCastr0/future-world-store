interface ErrorPageProps {
    error: Error;
    reset: () => void;
}

interface Products {
    id: number;
    title: string;
    price: number;
    description: string;
    images: string[];
    creationAt: Date;
    updatedAt: Date;
    category: Category;
}

interface Category {
    id: number;
    name: string;
    image: string;
    creationAt: Date;
    updatedAt: Date;
}
