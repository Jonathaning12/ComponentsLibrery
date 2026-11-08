import { useId } from 'react'
import styles from './FloatingInput.module.css'

// Campo de texto cuya etiqueta sube y se hace pequeña al escribir o enfocar
export default function FloatingInput({ etiqueta = 'Correo electrónico', tipo = 'email', id, ...props }) {
    const idAutomatico = useId()
    const idCampo = id ?? idAutomatico

    return (
        <div className={styles.campo}>
            {/* placeholder=" " permite saber con CSS si el campo tiene texto (:placeholder-shown) */}
            <input id={idCampo} type={tipo} placeholder=" " className={styles.input} {...props} />
            <label htmlFor={idCampo} className={styles.etiqueta}>
                {etiqueta}
            </label>
        </div>
    )
}
