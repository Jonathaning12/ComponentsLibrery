import { useEffect, useRef, useState } from 'react'
import styles from './StatCard.module.css'

const PUNTOS = [12, 18, 14, 22, 19, 28, 24, 32, 30, 38]

// Card de estadística: el número cuenta hacia arriba y la gráfica se dibuja al aparecer en pantalla
export default function StatCard({ titulo = 'Ventas del mes', valor = 48250, prefijo = '$', cambio = 12.4, puntos = PUNTOS }) {
    const card = useRef(null)
    const numero = useRef(null)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const elemento = card.current
        let cuadro = 0
        const observador = new IntersectionObserver(([entrada]) => {
            if (!entrada.isIntersecting) return
            observador.disconnect()
            setVisible(true)

            const inicio = performance.now()
            const duracion = 1400
            function paso(ahora) {
                const avance = Math.min((ahora - inicio) / duracion, 1)
                const suave = 1 - Math.pow(1 - avance, 3)
                numero.current.textContent = prefijo + Math.round(valor * suave).toLocaleString('es-MX')
                if (avance < 1) cuadro = requestAnimationFrame(paso)
            }
            cuadro = requestAnimationFrame(paso)
        }, { threshold: 0.4 })

        observador.observe(elemento)
        return () => {
            observador.disconnect()
            cancelAnimationFrame(cuadro)
        }
    }, [valor, prefijo])

    // Convierte los puntos en coordenadas de un SVG de 100 x 40
    const maximo = Math.max(...puntos)
    const minimo = Math.min(...puntos)
    const coordenadas = puntos.map((punto, i) => {
        const x = (i / (puntos.length - 1)) * 100
        const y = 36 - ((punto - minimo) / (maximo - minimo || 1)) * 32
        return `${x.toFixed(1)},${y.toFixed(1)}`
    })
    const linea = `M${coordenadas.join(' L')}`
    const area = `${linea} L100,40 L0,40 Z`
    const sube = cambio >= 0

    return (
        <article ref={card} className={`${styles.card} ${visible ? styles.visible : ''}`}>
            <p className={styles.titulo}>{titulo}</p>
            <p className={styles.valor}>
                <span ref={numero}>{prefijo}0</span>
            </p>
            <span className={`${styles.cambio} ${sube ? styles.sube : styles.baja}`}>
                {sube ? '▲' : '▼'} {Math.abs(cambio)}% vs. mes pasado
            </span>

            <svg className={styles.grafica} viewBox="0 0 100 40" preserveAspectRatio="none" aria-hidden="true">
                <defs>
                    <linearGradient id="statcard-relleno" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#10b981" stopOpacity="0.35" />
                        <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                    </linearGradient>
                </defs>
                <path className={styles.area} d={area} fill="url(#statcard-relleno)" />
                <path className={styles.linea} d={linea} pathLength="1" />
            </svg>
        </article>
    )
}
