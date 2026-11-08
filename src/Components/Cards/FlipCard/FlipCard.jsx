import { useState } from 'react'
import styles from './FlipCard.module.css'

// Card que se voltea al tocarla para mostrar la parte de atrás
export default function FlipCard({
    numero = '01',
    titulo = 'Card que se voltea',
    pista = 'Toca para voltear',
    tituloAtras = 'Parte de atrás',
    textoAtras = 'Útil para preguntas y respuestas, tarjetas de estudio o detalles de un producto.',
}) {
    const [volteada, setVolteada] = useState(false)

    return (
        <button
            type="button"
            className={`${styles.card} ${volteada ? styles.volteada : ''}`}
            onClick={() => setVolteada((valor) => !valor)}
            aria-pressed={volteada}
        >
            <span className={styles.interior}>
                <span className={`${styles.cara} ${styles.frente}`}>
                    <span className={styles.numero}>{numero}</span>
                    <span className={styles.titulo}>{titulo}</span>
                    <span className={styles.pista}>{pista} ↻</span>
                </span>
                <span className={`${styles.cara} ${styles.atras}`}>
                    <span className={styles.titulo}>{tituloAtras}</span>
                    <span className={styles.texto}>{textoAtras}</span>
                </span>
            </span>
        </button>
    )
}
