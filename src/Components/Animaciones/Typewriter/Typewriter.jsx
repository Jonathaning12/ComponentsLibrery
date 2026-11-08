import { useEffect, useState } from 'react'
import styles from './Typewriter.module.css'

const FRASES = ['diseñas.', 'programas.', 'animas.', 'construyes.']

// Texto que se escribe y se borra letra por letra, rotando entre varias frases
export default function Typewriter({ prefijo = 'Hola, tú ', frases = FRASES, velocidad = 85, pausa = 1400 }) {
    const [texto, setTexto] = useState('')
    const [indice, setIndice] = useState(0)
    const [borrando, setBorrando] = useState(false)

    useEffect(() => {
        const frase = frases[indice % frases.length]
        const completa = !borrando && texto === frase
        const vacia = borrando && texto === ''

        let espera = borrando ? velocidad / 2 : velocidad
        if (completa) espera = pausa
        if (vacia) espera = 300

        const id = setTimeout(() => {
            if (completa) {
                setBorrando(true)
            } else if (vacia) {
                setBorrando(false)
                setIndice((i) => i + 1)
            } else {
                setTexto(frase.slice(0, texto.length + (borrando ? -1 : 1)))
            }
        }, espera)

        return () => clearTimeout(id)
    }, [texto, borrando, indice, frases, velocidad, pausa])

    return (
        <p className={styles.linea} aria-label={`${prefijo}${frases.join(', ')}`}>
            <span aria-hidden="true">{prefijo}</span>
            <span className={styles.texto} aria-hidden="true">{texto}</span>
            <span className={styles.cursor} aria-hidden="true" />
        </p>
    )
}
