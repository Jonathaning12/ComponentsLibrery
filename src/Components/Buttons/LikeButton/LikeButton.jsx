import { useState } from 'react'
import styles from './LikeButton.module.css'

const PARTICULAS = Array.from({ length: 8 }, (_, i) => i)

// Botón de "me gusta": el corazón rebota y suelta una explosión de partículas
export default function LikeButton({ cantidadInicial = 128 }) {
    const [activo, setActivo] = useState(false)

    return (
        <button
            type="button"
            className={`${styles.boton} ${activo ? styles.activo : ''}`}
            onClick={() => setActivo((valor) => !valor)}
            aria-pressed={activo}
            aria-label="Me gusta"
        >
            <span className={styles.icono}>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 20.5s-7.5-4.6-9.3-9.2C1.4 7.9 3.6 4.5 7 4.5c2 0 3.5 1.1 5 3 1.5-1.9 3-3 5-3 3.4 0 5.6 3.4 4.3 6.8-1.8 4.6-9.3 9.2-9.3 9.2z" />
                </svg>
                {PARTICULAS.map((i) => (
                    <i key={i} style={{ '--i': i }} aria-hidden="true" />
                ))}
            </span>
            <span className={styles.cuenta}>{cantidadInicial + (activo ? 1 : 0)}</span>
        </button>
    )
}
