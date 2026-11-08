import { useState } from 'react'
import styles from './ExpandGallery.module.css'

const PANELES = [
    { titulo: 'Montaña', fondo: 'linear-gradient(160deg, #1e3a8a, #0ea5e9)' },
    { titulo: 'Desierto', fondo: 'linear-gradient(160deg, #c2410c, #fbbf24)' },
    { titulo: 'Bosque', fondo: 'linear-gradient(160deg, #14532d, #4ade80)' },
    { titulo: 'Océano', fondo: 'linear-gradient(160deg, #0c4a6e, #22d3ee)' },
    { titulo: 'Atardecer', fondo: 'linear-gradient(160deg, #831843, #fb7185)' },
]

// Paneles que se expanden al pasar el mouse. Cambia "fondo" por url(...) para usar fotos.
export default function ExpandGallery({ paneles = PANELES }) {
    const [abierto, setAbierto] = useState(0)

    return (
        <div className={styles.galeria}>
            {paneles.map((panel, i) => (
                <button
                    key={panel.titulo}
                    type="button"
                    className={`${styles.panel} ${i === abierto ? styles.abierto : ''}`}
                    style={{ background: panel.fondo, backgroundSize: 'cover', backgroundPosition: 'center' }}
                    onPointerEnter={() => setAbierto(i)}
                    onFocus={() => setAbierto(i)}
                    onClick={() => setAbierto(i)}
                    aria-expanded={i === abierto}
                >
                    <span className={styles.numero}>{String(i + 1).padStart(2, '0')}</span>
                    <span className={styles.titulo}>{panel.titulo}</span>
                </button>
            ))}
        </div>
    )
}
