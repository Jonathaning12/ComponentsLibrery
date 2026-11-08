import { useEffect, useRef, useState } from 'react'
import styles from './CopyButton.module.css'

// Muestra un texto (por ejemplo un comando) y lo copia al portapapeles con un clic
export default function CopyButton({ texto = 'npm create vite@latest' }) {
    const [copiado, setCopiado] = useState(false)
    const temporizador = useRef(null)

    useEffect(() => () => clearTimeout(temporizador.current), [])

    async function copiar() {
        try {
            await navigator.clipboard.writeText(texto)
        } catch {
            return
        }
        setCopiado(true)
        clearTimeout(temporizador.current)
        temporizador.current = setTimeout(() => setCopiado(false), 1800)
    }

    return (
        <button type="button" className={`${styles.boton} ${copiado ? styles.copiado : ''}`} onClick={copiar}>
            <code className={styles.codigo}>
                <span className={styles.prompt}>$</span> {texto}
            </code>
            <span className={styles.iconos} aria-hidden="true">
                <svg className={styles.copiar} viewBox="0 0 24 24">
                    <rect x="8" y="8" width="12" height="12" rx="2" />
                    <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
                </svg>
                <svg className={styles.listo} viewBox="0 0 24 24">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
            </span>
            <span className={styles.oculto} aria-live="polite">{copiado ? 'Copiado' : ''}</span>
        </button>
    )
}
