import { useState } from 'react'
import styles from './ProfileCard.module.css'

// Card de perfil con portada, avatar, estadísticas y botón de seguir
export default function ProfileCard({ nombre = 'Ana Torres', rol = 'Diseñadora UI', iniciales = 'AT', proyectos = 48, seguidores = 1240, likes = '3.1k' }) {
    const [siguiendo, setSiguiendo] = useState(false)

    return (
        <article className={styles.card}>
            <div className={styles.portada} aria-hidden="true" />
            <div className={styles.avatar}>{iniciales}</div>
            <h3 className={styles.nombre}>{nombre}</h3>
            <p className={styles.rol}>{rol}</p>

            <dl className={styles.stats}>
                <div>
                    <dt>Proyectos</dt>
                    <dd>{proyectos}</dd>
                </div>
                <div>
                    <dt>Seguidores</dt>
                    <dd>{(seguidores + (siguiendo ? 1 : 0)).toLocaleString('es-MX')}</dd>
                </div>
                <div>
                    <dt>Likes</dt>
                    <dd>{likes}</dd>
                </div>
            </dl>

            <button
                type="button"
                className={`${styles.boton} ${siguiendo ? styles.activo : ''}`}
                onClick={() => setSiguiendo((valor) => !valor)}
                aria-pressed={siguiendo}
            >
                {siguiendo ? 'Siguiendo ✓' : 'Seguir'}
            </button>
        </article>
    )
}
