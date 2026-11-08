import styles from './ShineButton.module.css'

// Botón con un reflejo de luz que lo cruza al pasar el mouse
export default function ShineButton({ children = 'Brillo', className = '', ...props }) {
    return (
        <button type="button" className={`${styles.boton} ${className}`} {...props}>
            {children}
        </button>
    )
}
