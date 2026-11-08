import styles from './Muestra.module.css'

// Marco de la página de muestra (no es parte de los componentes para copiar).
// ancha: ocupa 2 columnas · completa: ocupa toda la fila · llenar: el componente toma todo el ancho
export default function Muestra({ nombre, descripcion, ruta, children, ancha = false, completa = false, llenar = false, oscura = false }) {
    const clases = [styles.muestra, ancha && styles.ancha, completa && styles.completa].filter(Boolean).join(' ')
    const escenario = [styles.escenario, llenar && styles.llenar, oscura && styles.oscura].filter(Boolean).join(' ')

    return (
        <figure className={clases}>
            <div className={escenario}>{children}</div>
            <figcaption className={styles.pie}>
                <div className={styles.textos}>
                    <strong>{nombre}</strong>
                    <span>{descripcion}</span>
                </div>
                <code className={styles.ruta} title="Carpeta para copiar">{ruta}</code>
            </figcaption>
        </figure>
    )
}
