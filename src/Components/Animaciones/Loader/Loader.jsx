import styles from './Loader.module.css'

// Indicadores de carga. tipo: 'spinner' | 'puntos' | 'barras' | 'pulso'
export default function Loader({ tipo = 'spinner', color = '#6366f1' }) {
    const piezas = { puntos: 3, barras: 4 }[tipo] ?? 0

    return (
        <span className={`${styles.loader} ${styles[tipo]}`} style={{ '--color': color }} role="status" aria-label="Cargando">
            {Array.from({ length: piezas }, (_, i) => (
                <span key={i} style={{ '--i': i }} />
            ))}
        </span>
    )
}
