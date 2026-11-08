import { useState } from 'react'
import styles from './Toast.module.css'

const TIPOS = {
    exito: { titulo: 'Guardado', texto: 'Tus cambios se guardaron.' },
    error: { titulo: 'Algo falló', texto: 'No pudimos conectar. Intenta otra vez.' },
    info: { titulo: 'Nuevo mensaje', texto: 'Tienes una notificación pendiente.' },
}

// Notificaciones que entran por la esquina y se van solas (la barra muestra el tiempo restante).
// Para usarlo en tu app, llama a "mostrar(tipo)" desde donde lo necesites.
export default function Toast({ duracion = 3500 }) {
    const [avisos, setAvisos] = useState([])

    function mostrar(tipo) {
        setAvisos((actuales) => [...actuales, { id: crypto.randomUUID(), tipo, ...TIPOS[tipo] }])
    }

    function quitar(id) {
        setAvisos((actuales) => actuales.filter((aviso) => aviso.id !== id))
    }

    return (
        <>
            <div className={styles.botones}>
                <button type="button" onClick={() => mostrar('exito')}>Éxito</button>
                <button type="button" onClick={() => mostrar('error')}>Error</button>
                <button type="button" onClick={() => mostrar('info')}>Info</button>
            </div>

            <div className={styles.pila} aria-live="polite">
                {avisos.map((aviso) => (
                    <div key={aviso.id} className={`${styles.aviso} ${styles[aviso.tipo]}`} role="status">
                        <span className={styles.punto} aria-hidden="true" />
                        <div className={styles.textos}>
                            <strong>{aviso.titulo}</strong>
                            <span>{aviso.texto}</span>
                        </div>
                        <button type="button" className={styles.cerrar} onClick={() => quitar(aviso.id)} aria-label="Cerrar">
                            ×
                        </button>
                        {/* Cuando la barra termina de vaciarse, el aviso se quita */}
                        <span
                            className={styles.barra}
                            style={{ animationDuration: `${duracion}ms` }}
                            onAnimationEnd={() => quitar(aviso.id)}
                            aria-hidden="true"
                        />
                    </div>
                ))}
            </div>
        </>
    )
}
