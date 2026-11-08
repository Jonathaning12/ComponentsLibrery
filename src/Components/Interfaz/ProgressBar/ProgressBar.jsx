import styles from './ProgressBar.module.css'

// Barra de progreso con rayas animadas. valor va de 0 a 100.
export default function ProgressBar({ valor = 65, etiqueta = 'Subiendo archivo' }) {
    const limitado = Math.min(100, Math.max(0, valor))

    return (
        <div className={styles.contenedor}>
            <div className={styles.cabecera}>
                <span>{etiqueta}</span>
                <span className={styles.porcentaje}>{Math.round(limitado)}%</span>
            </div>
            <div
                className={styles.pista}
                role="progressbar"
                aria-valuenow={Math.round(limitado)}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={etiqueta}
            >
                <div className={`${styles.relleno} ${limitado === 100 ? styles.completo : ''}`} style={{ width: `${limitado}%` }} />
            </div>
        </div>
    )
}
