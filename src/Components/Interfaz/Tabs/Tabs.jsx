import { useState } from 'react'
import styles from './Tabs.module.css'

const PESTANAS = [
    { titulo: 'Diseño', contenido: 'Elige colores, tipografía y espaciado. Todo vive en el CSS de cada componente.' },
    { titulo: 'Código', contenido: 'Componentes de React sin dependencias extra. Copia la carpeta y listo.' },
    { titulo: 'Movimiento', contenido: 'Animaciones con CSS que respetan "reducir movimiento" del sistema.' },
]

// Pestañas con un indicador que se desliza hasta la pestaña activa
export default function Tabs({ pestanas = PESTANAS }) {
    const [actual, setActual] = useState(0)

    return (
        <div className={styles.tabs}>
            <div className={styles.lista} role="tablist" style={{ '--total': pestanas.length, '--actual': actual }}>
                <span className={styles.indicador} aria-hidden="true" />
                {pestanas.map((pestana, i) => (
                    <button
                        key={pestana.titulo}
                        type="button"
                        role="tab"
                        aria-selected={i === actual}
                        className={i === actual ? styles.activa : ''}
                        onClick={() => setActual(i)}
                    >
                        {pestana.titulo}
                    </button>
                ))}
            </div>
            {/* La key nueva hace que el panel vuelva a animar su entrada */}
            <div key={actual} className={styles.panel} role="tabpanel">
                {pestanas[actual].contenido}
            </div>
        </div>
    )
}
