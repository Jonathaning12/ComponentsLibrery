import Porsche from './porsche.webp'
import styles from './BuyCard.module.css'

// className deja que el contenedor le ponga clases extra (por ejemplo, para hacerla más ancha)
export default function BuyCard({ className = '' }) {
    return (
        <article className={`${styles.card} ${className}`}>
            <div className={styles.cardImage}>
                <img src={Porsche} alt="Porsche café de perfil" />
            </div>

            <h3 className={styles.nombre}>Porsche 911</h3>
            <p className={styles.precio}>$120,000</p>

            <button className={styles.boton}>Comprar</button>
        </article>
    )
}
