import styles from './PricingCard.module.css'

const BENEFICIOS = ['Proyectos ilimitados', 'Dominio propio', 'Soporte prioritario', 'Estadísticas en vivo']

// Card de precio; con destacado=true lleva un borde de color que gira
export default function PricingCard({ plan = 'Pro', precio = 19, periodo = 'mes', beneficios = BENEFICIOS, destacado = true }) {
    return (
        <article className={`${styles.marco} ${destacado ? styles.destacado : ''}`}>
            <div className={styles.card}>
                {destacado && <span className={styles.popular}>Más popular</span>}
                <h3 className={styles.plan}>{plan}</h3>
                <p className={styles.precio}>
                    <span className={styles.moneda}>$</span>
                    {precio}
                    <span className={styles.periodo}>/{periodo}</span>
                </p>
                <ul className={styles.lista}>
                    {beneficios.map((beneficio) => (
                        <li key={beneficio}>
                            <svg viewBox="0 0 20 20" aria-hidden="true">
                                <path d="M5 10.5l3 3 7-7" />
                            </svg>
                            {beneficio}
                        </li>
                    ))}
                </ul>
                <button type="button" className={styles.boton}>Empezar ahora</button>
            </div>
        </article>
    )
}
