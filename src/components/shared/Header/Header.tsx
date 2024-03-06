import Link from "next/link";

export const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <Link href="/" target="_self">
                        <li>Home</li>
                    </Link>
                    <Link href="/store" target="_self">
                        <li>Store</li>
                    </Link>
                </ul>
            </nav>
        </header>
    )
}