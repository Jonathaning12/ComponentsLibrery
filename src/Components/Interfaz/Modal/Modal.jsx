import { useRef } from 'react'
import styles from './Modal.module.css'

// Ventana modal con <dialog> nativo: se cierra con Esc, con los botones o tocando afuera
export default function Modal({
    textoBoton = 'Abrir modal',
    titulo = '¿Guardar los cambios?',
    children = 'Si sales sin guardar, perderás lo que editaste en este documento.',
    onConfirmar,
}) {
    const dialogo = useRef(null)

    const cerrar = () => dialogo.current.close()

    function confirmar() {
        onConfirmar?.()
        cerrar()
    }

    return (
        <>
            <button type="button" className={styles.abrir} onClick={() => dialogo.current.showModal()}>
                {textoBoton}
            </button>

            <dialog
                ref={dialogo}
                className={styles.modal}
                onClick={(evento) => {
                    // El clic cae en el <dialog> solo cuando se toca el fondo, fuera del contenido
                    if (evento.target === dialogo.current) cerrar()
                }}
            >
                <div className={styles.contenido}>
                    <h3>{titulo}</h3>
                    <p>{children}</p>
                    <div className={styles.acciones}>
                        <button type="button" className={styles.secundario} onClick={cerrar}>Cancelar</button>
                        <button type="button" className={styles.principal} onClick={confirmar}>Guardar</button>
                    </div>
                </div>
            </dialog>
        </>
    )
}
