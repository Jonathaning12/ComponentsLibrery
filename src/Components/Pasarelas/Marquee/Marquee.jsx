import styles from './Marquee.module.css'

const ELEMENTOS = ['React', 'Vite', 'CSS', 'Figma', 'Node', 'Astro', 'Svelte', 'TypeScript']

// Fila que se desplaza sin fin; se pausa al pasar el mouse. Útil para logos o tecnologías.
export default function Marquee({ elementos = ELEMENTOS, duracion = 25, reversa = false }) {
    // La lista va duplicada: al llegar a la mitad, la animación vuelve a empezar sin que se note el salto
    const dobles = [...elementos, ...elementos]

    return (
        <div className={`${styles.marquee} ${reversa ? styles.reversa : ''}`} style={{ '--duracion': `${duracion}s` }}>
            <div className={styles.pista}>
                {dobles.map((elemento, i) => (
                    <span key={i} className={styles.item} aria-hidden={i >= elementos.length}>
                        {elemento}
                    </span>
                ))}
            </div>
        </div>
    )
}
