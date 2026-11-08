import { useState } from 'react'
import styles from './Toggle.module.css'

// Interruptor de encendido/apagado; la bolita se estira al presionarla
export default function Toggle({ etiqueta = 'Notificaciones', inicial = false, onChange }) {
    const [encendido, setEncendido] = useState(inicial)

    function cambiar(evento) {
        setEncendido(evento.target.checked)
        onChange?.(evento.target.checked)
    }

    return (
        <label className={styles.toggle}>
            <input type="checkbox" role="switch" checked={encendido} onChange={cambiar} className={styles.input} />
            <span className={styles.pista} aria-hidden="true">
                <span className={styles.bola} />
            </span>
            {etiqueta}
        </label>
    )
}
