import { useEffect, useRef, useState } from 'react'
import styles from './LoadingButton.module.css'

// Botón con tres estados: normal → cargando (se encoge a un círculo) → listo (palomita verde).
// accion debe regresar una promesa (por ejemplo, un fetch). Si no se pasa, simula 1.5 s de espera.
export default function LoadingButton({ children = 'Enviar', accion }) {
    const [estado, setEstado] = useState('normal')
    const temporizador = useRef(null)

    useEffect(() => () => clearTimeout(temporizador.current), [])

    async function clic() {
        if (estado !== 'normal') return
        setEstado('cargando')
        try {
            await (accion ? accion() : new Promise((listo) => setTimeout(listo, 1500)))
            setEstado('listo')
        } catch {
            setEstado('normal')
            return
        }
        temporizador.current = setTimeout(() => setEstado('normal'), 1800)
    }

    return (
        <button
            type="button"
            className={`${styles.boton} ${styles[estado]}`}
            onClick={clic}
            aria-busy={estado === 'cargando'}
            aria-live="polite"
        >
            {estado === 'normal' && <span className={styles.texto}>{children}</span>}
            {estado === 'cargando' && <span className={styles.spinner} aria-label="Cargando" />}
            {estado === 'listo' && (
                <svg className={styles.palomita} viewBox="0 0 24 24" aria-label="Listo">
                    <path d="M5 12.5l4.5 4.5L19 7.5" pathLength="1" />
                </svg>
            )}
        </button>
    )
}
