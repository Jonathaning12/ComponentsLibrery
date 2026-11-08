import styles from './Skeleton.module.css'

// Silueta de carga con brillo. Ponla mientras llegan los datos reales.
export default function Skeleton({ lineas = 3, avatar = true, imagen = true }) {
    return (
        <div className={styles.skeleton} role="status" aria-label="Cargando contenido">
            {imagen && <div className={`${styles.bloque} ${styles.imagen}`} />}
            <div className={styles.fila}>
                {avatar && <div className={`${styles.bloque} ${styles.avatar}`} />}
                <div className={styles.textos}>
                    {Array.from({ length: lineas }, (_, i) => (
                        <div key={i} className={`${styles.bloque} ${styles.linea}`} style={{ width: `${100 - i * 18}%` }} />
                    ))}
                </div>
            </div>
        </div>
    )
}
