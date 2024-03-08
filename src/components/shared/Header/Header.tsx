import Link from "next/link";

import styles from './Header.module.sass'

export const Header = () => {
    return (
        <header>
            <nav>
                <ul className={styles.Header__list}>
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