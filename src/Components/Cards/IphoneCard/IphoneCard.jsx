import styles from './IphoneCard.module.css'
import iphone from './iphone.webp'

export default function IphoneCard() {
    return (
        <article className={styles.card}>
            <img src={iphone} alt="iPhone" />
            <section>
                <h3>iPhone</h3>
                <a href="">Titanio</a>
                <p>Desde $50 al mes o $ 1.219,00</p>
            </section>
        </article>
    )
}