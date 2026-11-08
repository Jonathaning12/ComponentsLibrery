import { useRef } from 'react'
import styles from './SpotlightCard.module.css'

const PUNTOS = ['Despliegues en segundos', 'Dominio con SSL gratis', 'Vista previa por rama']

// Card oscura: una luz y el borde se iluminan donde está el cursor
export default function SpotlightCard({ titulo = 'Spotlight', texto = 'La luz sigue al cursor y el borde se enciende cerca de él.', puntos = PUNTOS }) {
    const card = useRef(null)

    function mover(evento) {
        const caja = card.current.getBoundingClientRect()
        card.current.style.setProperty('--x', `${evento.clientX - caja.left}px`)
        card.current.style.setProperty('--y', `${evento.clientY - caja.top}px`)
    }

    return (
        <article ref={card} className={styles.card} onPointerMove={mover}>
            <div className={styles.icono} aria-hidden="true">✦</div>
            <h3>{titulo}</h3>
            <p className={styles.texto}>{texto}</p>
            <ul className={styles.lista}>
                {puntos.map((punto) => (
                    <li key={punto}>{punto}</li>
                ))}
            </ul>
        </article>
    )
}
