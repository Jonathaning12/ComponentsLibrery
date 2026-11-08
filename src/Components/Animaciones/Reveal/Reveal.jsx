import { useEffect, useRef, useState } from 'react'
import styles from './Reveal.module.css'

// Envuelve cualquier cosa para que aparezca al entrar en pantalla.
// desde: 'abajo' | 'arriba' | 'izquierda' | 'derecha' | 'zoom'
export default function Reveal({ children, desde = 'abajo', retraso = 0 }) {
    const caja = useRef(null)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const observador = new IntersectionObserver(([entrada]) => {
            if (entrada.isIntersecting) {
                setVisible(true)
                observador.disconnect()
            }
        }, { threshold: 0.2 })

        observador.observe(caja.current)
        return () => observador.disconnect()
    }, [])

    return (
        <div
            ref={caja}
            className={`${styles.reveal} ${styles[desde]} ${visible ? styles.visible : ''}`}
            style={{ transitionDelay: `${retraso}ms` }}
        >
            {children}
        </div>
    )
}
