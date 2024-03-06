import styles from './Description.module.sass'

export const Description = () => {
    return (
        <section className={styles.Description}>
            <img src="/images/description.jpeg" alt="products marketplace" />
            <div className={styles.Description__text}>
                <h2>Bring the future today!</h2>
                <p>Future World: Your Gateway to Tomorrow&apos;s Tech!</p>
            </div>
        </section>
    )
}