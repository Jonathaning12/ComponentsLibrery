import { useEffect, useState } from 'react'
import styles from './Slider.module.css'

const SLIDES = [
    { titulo: 'Diseña sin límites', texto: 'Componentes listos para copiar y pegar.', fondo: 'linear-gradient(135deg, #4f46e5, #9333ea)' },
    { titulo: 'Anima con intención', texto: 'Movimiento que guía, no que distrae.', fondo: 'linear-gradient(135deg, #0ea5e9, #10b981)' },
    { titulo: 'Construye rápido', texto: 'Menos tiempo en estilos, más en tu idea.', fondo: 'linear-gradient(135deg, #f97316, #e11d48)' },
]

// Slider con flechas, puntos y avance automático (se pausa al pasar el mouse)
export default function Slider({ slides = SLIDES, intervalo = 4500 }) {
    const [actual, setActual] = useState(0)
    const [pausado, setPausado] = useState(false)
    const total = slides.length

    useEffect(() => {
        if (pausado) return
        const id = setInterval(() => setActual((i) => (i + 1) % total), intervalo)
        return () => clearInterval(id)
    }, [pausado, intervalo, total, actual])

    const ir = (indice) => setActual((indice + total) % total)

    return (
        <div
            className={styles.slider}
            onPointerEnter={() => setPausado(true)}
            onPointerLeave={() => setPausado(false)}
            aria-roledescription="carrusel"
        >
            <div className={styles.pista} style={{ transform: `translateX(-${actual * 100}%)` }}>
                {slides.map((slide, i) => (
                    <article
                        key={slide.titulo}
                        className={`${styles.slide} ${i === actual ? styles.activa : ''}`}
                        style={{ background: slide.fondo }}
                        aria-hidden={i !== actual}
                    >
                        <h3>{slide.titulo}</h3>
                        <p>{slide.texto}</p>
                    </article>
                ))}
            </div>

            <button type="button" className={`${styles.flecha} ${styles.izquierda}`} onClick={() => ir(actual - 1)} aria-label="Anterior">
                ‹
            </button>
            <button type="button" className={`${styles.flecha} ${styles.derecha}`} onClick={() => ir(actual + 1)} aria-label="Siguiente">
                ›
            </button>

            <div className={styles.puntos}>
                {slides.map((slide, i) => (
                    <button
                        key={slide.titulo}
                        type="button"
                        className={i === actual ? styles.puntoActivo : ''}
                        onClick={() => ir(i)}
                        aria-label={`Ir a la diapositiva ${i + 1}`}
                    />
                ))}
            </div>
        </div>
    )
}
