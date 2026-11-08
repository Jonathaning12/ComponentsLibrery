import styles from './Tooltip.module.css'

// Globo de ayuda que aparece al pasar el mouse o enfocar con teclado.
// posicion: 'arriba' | 'abajo' | 'izquierda' | 'derecha'
export default function Tooltip({ texto = 'Hola', posicion = 'arriba', children }) {
    return (
        <span className={`${styles.tooltip} ${styles[posicion]}`}>
            {children}
            <span role="tooltip" className={styles.globo}>
                {texto}
            </span>
        </span>
    )
}
