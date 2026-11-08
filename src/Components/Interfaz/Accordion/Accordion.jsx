import { useState } from 'react'
import styles from './Accordion.module.css'

const ITEMS = [
    { pregunta: '¿Puedo usar estos componentes en mi proyecto?', respuesta: 'Sí. Copia la carpeta del componente y úsalo como cualquier otro.' },
    { pregunta: '¿Necesitan alguna librería?', respuesta: 'No. Solo React y CSS Modules, que ya vienen con Vite.' },
    { pregunta: '¿Cómo cambio los colores?', respuesta: 'Cada componente tiene su propio archivo .module.css; los colores están ahí.' },
]

// Lista de preguntas que se abren y cierran con una animación de altura suave
export default function Accordion({ items = ITEMS }) {
    const [abierto, setAbierto] = useState(0)

    return (
        <div className={styles.acordeon}>
            {items.map((item, i) => {
                const activo = i === abierto
                return (
                    <div key={item.pregunta} className={`${styles.item} ${activo ? styles.activo : ''}`}>
                        <button
                            type="button"
                            className={styles.cabecera}
                            onClick={() => setAbierto(activo ? -1 : i)}
                            aria-expanded={activo}
                        >
                            {item.pregunta}
                            <span className={styles.icono} aria-hidden="true" />
                        </button>
                        <div className={styles.cuerpo}>
                            <div className={styles.interior}>
                                <p>{item.respuesta}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
