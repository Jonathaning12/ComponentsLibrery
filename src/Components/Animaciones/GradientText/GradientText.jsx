import styles from './GradientText.module.css'

// Texto con un degradado de colores que se desplaza. "como" define la etiqueta: h1, h2, span...
export default function GradientText({ children = 'Texto con degradado', como: Etiqueta = 'h2', className = '' }) {
    return <Etiqueta className={`${styles.texto} ${className}`}>{children}</Etiqueta>
}
