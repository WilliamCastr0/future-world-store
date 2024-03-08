import Image from 'next/image'
import styles from './Description.module.sass'

export const Description = () => {
    return (
        <section className={styles.Description}>
            <Image
                src='/images/description.jpeg'
                alt='Powerful future'
                width={500}
                height={300}
                priority={true}
            />
            <div className={styles.Description__text}>
                <h2>Bring the future today!</h2>
                <p>Future World: Your Gateway to Tomorrow&apos;s Tech!</p>
            </div>
        </section>
    )
}