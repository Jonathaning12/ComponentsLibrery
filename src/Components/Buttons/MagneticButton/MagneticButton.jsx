import { useRef } from 'react'
import styles from './MagneticButton.module.css'

// Botón que se deja "jalar" por el cursor y regresa con rebote al soltarlo
export default function MagneticButton({ children = 'Magnético', fuerza = 0.35, className = '', ...props }) {
    const boton = useRef(null)

    function mover(evento) {
        const caja = boton.current.getBoundingClientRect()
        const x = evento.clientX - (caja.left + caja.width / 2)
        const y = evento.clientY - (caja.top + caja.height / 2)
        boton.current.style.setProperty('--mx', `${x * fuerza}px`)
        boton.current.style.setProperty('--my', `${y * fuerza}px`)
    }

    function salir() {
        boton.current.style.setProperty('--mx', '0px')
        boton.current.style.setProperty('--my', '0px')
    }

    return (
        <button
            ref={boton}
            type="button"
            className={`${styles.boton} ${className}`}
            onPointerMove={mover}
            onPointerLeave={salir}
            {...props}
        >
            <span className={styles.texto}>{children}</span>
        </button>
    )
}
