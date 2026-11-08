import { useRef } from 'react'
import styles from './Carrusel.module.css'

// Carrusel con scroll nativo (funciona con dedo, rueda y flechas). Mete lo que quieras como children.
export default function Carrusel({ children, anchoItem = 280 }) {
    const pista = useRef(null)

    function mover(direccion) {
        const elemento = pista.current
        elemento.scrollBy({ left: direccion * elemento.clientWidth * 0.8, behavior: 'smooth' })
    }

    return (
        <div className={styles.carrusel}>
            <div ref={pista} className={styles.pista} style={{ '--ancho': `${anchoItem}px` }}>
                {children}
            </div>
            <div className={styles.controles}>
                <button type="button" onClick={() => mover(-1)} aria-label="Anterior">←</button>
                <button type="button" onClick={() => mover(1)} aria-label="Siguiente">→</button>
            </div>
        </div>
    )
}
