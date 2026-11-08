import styles from './GlassCard.module.css'

// Card de cristal esmerilado sobre manchas de color que flotan detrás
export default function GlassCard({ etiqueta = 'Saldo disponible', monto = '$24,580.00', numero = '4821', vence = '08/29' }) {
    return (
        <div className={styles.fondo}>
            <span className={`${styles.mancha} ${styles.uno}`} aria-hidden="true" />
            <span className={`${styles.mancha} ${styles.dos}`} aria-hidden="true" />
            <article className={styles.card}>
                <div className={styles.chip} aria-hidden="true" />
                <p className={styles.etiqueta}>{etiqueta}</p>
                <p className={styles.monto}>{monto}</p>
                <div className={styles.fila}>
                    <span>•••• {numero}</span>
                    <span>{vence}</span>
                </div>
            </article>
        </div>
    )
}
