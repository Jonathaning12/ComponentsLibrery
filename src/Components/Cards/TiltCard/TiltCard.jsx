import { useRef } from 'react'
import styles from './TiltCard.module.css'

// Card que se inclina en 3D siguiendo el mouse, con un brillo que va donde está el cursor
export default function TiltCard({
    etiqueta = 'Nuevo',
    titulo = 'Tilt 3D',
    texto = 'Pasa el mouse encima: la card se inclina y un brillo sigue al cursor.',
}) {
    const card = useRef(null)

    function mover(evento) {
        const caja = card.current.getBoundingClientRect()
        const x = (evento.clientX - caja.left) / caja.width
        const y = (evento.clientY - caja.top) / caja.height
        card.current.style.setProperty('--rx', `${(0.5 - y) * 16}deg`)
        card.current.style.setProperty('--ry', `${(x - 0.5) * 16}deg`)
        card.current.style.setProperty('--gx', `${x * 100}%`)
        card.current.style.setProperty('--gy', `${y * 100}%`)
    }

    function salir() {
        card.current.style.setProperty('--rx', '0deg')
        card.current.style.setProperty('--ry', '0deg')
    }

    return (
        <div className={styles.escena}>
            <article ref={card} className={styles.card} onPointerMove={mover} onPointerLeave={salir}>
                <span className={styles.chip}>{etiqueta}</span>
                <h3>{titulo}</h3>
                <p>{texto}</p>
                <div className={styles.brillo} aria-hidden="true" />
            </article>
        </div>
    )
}
