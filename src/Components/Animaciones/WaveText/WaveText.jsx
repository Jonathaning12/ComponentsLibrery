import styles from './WaveText.module.css'

// Cada letra salta un poco después de la anterior, formando una ola
export default function WaveText({ texto = '¡Hola mundo!' }) {
    return (
        <p className={styles.ola} aria-label={texto}>
            {[...texto].map((letra, i) => (
                <span key={i} style={{ '--i': i }} aria-hidden="true">
                    {letra === ' ' ? ' ' : letra}
                </span>
            ))}
        </p>
    )
}
