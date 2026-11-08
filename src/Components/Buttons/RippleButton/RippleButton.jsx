import { useState } from 'react'
import styles from './RippleButton.module.css'

// Botón que lanza una onda desde el punto exacto donde se hizo clic
export default function RippleButton({ children = 'Onda', onClick, className = '', ...props }) {
    const [ondas, setOndas] = useState([])

    function clic(evento) {
        const caja = evento.currentTarget.getBoundingClientRect()
        const tamano = Math.max(caja.width, caja.height) * 2
        const onda = {
            id: crypto.randomUUID(),
            x: evento.clientX - caja.left - tamano / 2,
            y: evento.clientY - caja.top - tamano / 2,
            tamano,
        }
        setOndas((actuales) => [...actuales, onda])
        onClick?.(evento)
    }

    function quitar(id) {
        setOndas((actuales) => actuales.filter((onda) => onda.id !== id))
    }

    return (
        <button type="button" className={`${styles.boton} ${className}`} onClick={clic} {...props}>
            {children}
            {ondas.map((onda) => (
                <span
                    key={onda.id}
                    className={styles.onda}
                    style={{ left: onda.x, top: onda.y, width: onda.tamano, height: onda.tamano }}
                    onAnimationEnd={() => quitar(onda.id)}
                    aria-hidden="true"
                />
            ))}
        </button>
    )
}
