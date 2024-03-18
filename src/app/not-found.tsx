import styles from 'app/sass/not-found.module.sass'
import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
    return (
        <main className={styles.NotFound}>
            <h1 className={styles.NotFound__title}>404</h1>
            <Image src='/images/404.png' alt='404' width={300} height={300} />
            <h2 className={styles.NotFound__subtitle}>
                Ups! The link is on vacation!
            </h2>
            <p className={styles.NotFound__description}>But our store is available 24/7. Check out!</p>
            <Link className={styles.NotFound__link} href='/store'>Go to store</Link>
        </main>
    )
}