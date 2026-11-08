// Ejemplos de uso para la página de muestra (no hace falta copiarlos)
import { useState } from 'react'
import Reveal from '../Components/Animaciones/Reveal/Reveal'
import Loader from '../Components/Animaciones/Loader/Loader'
import ProgressBar from '../Components/Interfaz/ProgressBar/ProgressBar'
import Tooltip from '../Components/Interfaz/Tooltip/Tooltip'
import FloatingInput from '../Components/Interfaz/FloatingInput/FloatingInput'
import Carrusel from '../Components/Pasarelas/Carrusel/Carrusel'
import styles from './Demos.module.css'

export function DemoReveal() {
    const [vuelta, setVuelta] = useState(0)

    return (
        <div className={styles.columna}>
            {/* Cambiar la key vuelve a montar los Reveal y repite la animación */}
            <div key={vuelta} className={styles.fila}>
                <Reveal desde="abajo"><div className={styles.caja}>abajo</div></Reveal>
                <Reveal desde="zoom" retraso={150}><div className={styles.caja}>zoom</div></Reveal>
                <Reveal desde="derecha" retraso={300}><div className={styles.caja}>derecha</div></Reveal>
            </div>
            <button type="button" className={styles.boton} onClick={() => setVuelta((v) => v + 1)}>Repetir ↻</button>
        </div>
    )
}

export function DemoLoaders() {
    return (
        <div className={styles.fila}>
            <Loader tipo="spinner" color="#6366f1" />
            <Loader tipo="puntos" color="#ec4899" />
            <Loader tipo="barras" color="#10b981" />
            <Loader tipo="pulso" color="#f59e0b" />
        </div>
    )
}

export function DemoProgreso() {
    const [valor, setValor] = useState(65)

    return (
        <div className={styles.columna}>
            <ProgressBar valor={valor} />
            <input
                type="range"
                min="0"
                max="100"
                value={valor}
                onChange={(evento) => setValor(Number(evento.target.value))}
                className={styles.rango}
                aria-label="Cambiar el progreso"
            />
        </div>
    )
}

export function DemoTooltips() {
    return (
        <div className={styles.cuadricula}>
            <Tooltip texto="Arriba" posicion="arriba"><button type="button" className={styles.boton}>Arriba</button></Tooltip>
            <Tooltip texto="Abajo" posicion="abajo"><button type="button" className={styles.boton}>Abajo</button></Tooltip>
            <Tooltip texto="Izquierda" posicion="izquierda"><button type="button" className={styles.boton}>Izquierda</button></Tooltip>
            <Tooltip texto="Derecha" posicion="derecha"><button type="button" className={styles.boton}>Derecha</button></Tooltip>
        </div>
    )
}

export function DemoInputs() {
    return (
        <div className={styles.columna}>
            <FloatingInput etiqueta="Nombre" tipo="text" />
            <FloatingInput etiqueta="Correo electrónico" tipo="email" />
        </div>
    )
}

const ITEMS_CARRUSEL = [
    { titulo: 'Café', color: 'linear-gradient(150deg, #78350f, #d97706)' },
    { titulo: 'Menta', color: 'linear-gradient(150deg, #064e3b, #34d399)' },
    { titulo: 'Uva', color: 'linear-gradient(150deg, #4c1d95, #a78bfa)' },
    { titulo: 'Cereza', color: 'linear-gradient(150deg, #881337, #fb7185)' },
    { titulo: 'Cielo', color: 'linear-gradient(150deg, #0c4a6e, #38bdf8)' },
    { titulo: 'Limón', color: 'linear-gradient(150deg, #3f6212, #a3e635)' },
    { titulo: 'Grafito', color: 'linear-gradient(150deg, #18181b, #71717a)' },
]

export function DemoCarrusel() {
    return (
        <Carrusel anchoItem={220}>
            {ITEMS_CARRUSEL.map((item) => (
                <article key={item.titulo} className={styles.itemCarrusel} style={{ background: item.color }}>
                    {item.titulo}
                </article>
            ))}
        </Carrusel>
    )
}
