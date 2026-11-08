import './App.css'
import Muestra from './Pagina/Muestra'
import { DemoCarrusel, DemoInputs, DemoLoaders, DemoProgreso, DemoReveal, DemoTooltips } from './Pagina/Demos'

// Cards
import IphoneCard from './Components/Cards/IphoneCard/IphoneCard'
import BuyCard from './Components/Cards/BuyCard/BuyCard'
import TiltCard from './Components/Cards/TiltCard/TiltCard'
import GlassCard from './Components/Cards/GlassCard/GlassCard'
import FlipCard from './Components/Cards/FlipCard/FlipCard'
import PricingCard from './Components/Cards/PricingCard/PricingCard'
import ProfileCard from './Components/Cards/ProfileCard/ProfileCard'
import StatCard from './Components/Cards/StatCard/StatCard'
import SpotlightCard from './Components/Cards/SpotlightCard/SpotlightCard'

// Botones
import ShineButton from './Components/Buttons/ShineButton/ShineButton'
import RippleButton from './Components/Buttons/RippleButton/RippleButton'
import MagneticButton from './Components/Buttons/MagneticButton/MagneticButton'
import LoadingButton from './Components/Buttons/LoadingButton/LoadingButton'
import LikeButton from './Components/Buttons/LikeButton/LikeButton'
import Toggle from './Components/Buttons/Toggle/Toggle'
import CopyButton from './Components/Buttons/CopyButton/CopyButton'

// Pasarelas
import Marquee from './Components/Pasarelas/Marquee/Marquee'
import Slider from './Components/Pasarelas/Slider/Slider'
import ExpandGallery from './Components/Pasarelas/ExpandGallery/ExpandGallery'

// Animaciones
import Typewriter from './Components/Animaciones/Typewriter/Typewriter'
import GradientText from './Components/Animaciones/GradientText/GradientText'
import Skeleton from './Components/Animaciones/Skeleton/Skeleton'
import WaveText from './Components/Animaciones/WaveText/WaveText'

// Interfaz
import Accordion from './Components/Interfaz/Accordion/Accordion'
import Tabs from './Components/Interfaz/Tabs/Tabs'
import Modal from './Components/Interfaz/Modal/Modal'
import Toast from './Components/Interfaz/Toast/Toast'

const SECCIONES = [
  { id: 'cards', titulo: 'Cards' },
  { id: 'botones', titulo: 'Botones' },
  { id: 'pasarelas', titulo: 'Pasarelas' },
  { id: 'animaciones', titulo: 'Animaciones' },
  { id: 'interfaz', titulo: 'Interfaz' },
]

function Seccion({ id, titulo, descripcion, cantidad, variante = '', children }) {
  return (
    <section id={id} className="seccion">
      <header className="seccion_cabecera">
        <h2>
          {titulo} <span className="contador">{cantidad}</span>
        </h2>
        <p>{descripcion}</p>
      </header>
      <div className={`galeria ${variante}`}>{children}</div>
    </section>
  )
}

function App() {
  return (
    <>
      <header className="barra">
        <a href="#inicio" className="marca">
          <span className="marca_logo" aria-hidden="true" />
          Componentes
        </a>
        <nav className="nav" aria-label="Secciones">
          {SECCIONES.map((seccion) => (
            <a key={seccion.id} href={`#${seccion.id}`}>{seccion.titulo}</a>
          ))}
        </nav>
      </header>

      <main className="container">
        <section id="inicio" className="hero">
          <p className="hero_etiqueta">React + CSS Modules · sin librerías</p>
          <GradientText como="h1" className="hero_titulo">Componentes para copiar y pegar</GradientText>
          <p className="hero_texto">
            33 componentes con animaciones, sombras y detalles distintos. Cada uno vive en su propia carpeta
            dentro de <code>src/Components</code>: cópiala a tu proyecto e impórtala.
          </p>
          <div className="hero_acciones">
            <a href="#cards" className="hero_boton">Ver componentes ↓</a>
            <CopyButton texto="cp -r src/Components/Cards/TiltCard ../mi-proyecto/src/" />
          </div>
        </section>

        <Seccion id="cards" titulo="Cards" cantidad={9} descripcion="Tarjetas con efectos de mouse, 3D, cristal y datos animados.">
          <Muestra nombre="BuyCard" descripcion="Producto con foto girada con CSS" ruta="Components/Cards/BuyCard" llenar ancha>
            <BuyCard />
          </Muestra>
          <Muestra nombre="IphoneCard" descripcion="Foto de fondo con zoom al pasar" ruta="Components/Cards/IphoneCard" llenar>
            <IphoneCard />
          </Muestra>
          <Muestra nombre="TiltCard" descripcion="Inclinación 3D y brillo que sigue al cursor" ruta="Components/Cards/TiltCard" llenar>
            <TiltCard />
          </Muestra>
          <Muestra nombre="GlassCard" descripcion="Cristal esmerilado sobre manchas que flotan" ruta="Components/Cards/GlassCard" llenar>
            <GlassCard />
          </Muestra>
          <Muestra nombre="FlipCard" descripcion="Se voltea al tocarla" ruta="Components/Cards/FlipCard" llenar>
            <FlipCard />
          </Muestra>
          <Muestra nombre="PricingCard" descripcion="Borde de color que gira" ruta="Components/Cards/PricingCard" llenar>
            <PricingCard />
          </Muestra>
          <Muestra nombre="ProfileCard" descripcion="Sombra en capas y botón de seguir" ruta="Components/Cards/ProfileCard" llenar>
            <ProfileCard />
          </Muestra>
          <Muestra nombre="StatCard" descripcion="Número que cuenta y gráfica que se dibuja" ruta="Components/Cards/StatCard" llenar>
            <StatCard />
          </Muestra>
          <Muestra nombre="SpotlightCard" descripcion="Luz y borde que siguen al cursor" ruta="Components/Cards/SpotlightCard" llenar oscura>
            <SpotlightCard />
          </Muestra>
        </Seccion>

        <Seccion id="botones" titulo="Botones" cantidad={7} variante="galeria_chica" descripcion="Botones con brillo, ondas, imán, estados de carga y más.">
          <Muestra nombre="ShineButton" descripcion="Reflejo que cruza al pasar" ruta="Components/Buttons/ShineButton">
            <ShineButton>Brillo</ShineButton>
          </Muestra>
          <Muestra nombre="RippleButton" descripcion="Onda desde donde haces clic" ruta="Components/Buttons/RippleButton">
            <RippleButton>Haz clic</RippleButton>
          </Muestra>
          <Muestra nombre="MagneticButton" descripcion="Se deja jalar por el cursor" ruta="Components/Buttons/MagneticButton">
            <MagneticButton>Acércate</MagneticButton>
          </Muestra>
          <Muestra nombre="LoadingButton" descripcion="Normal → cargando → listo" ruta="Components/Buttons/LoadingButton">
            <LoadingButton>Enviar</LoadingButton>
          </Muestra>
          <Muestra nombre="LikeButton" descripcion="Corazón con explosión" ruta="Components/Buttons/LikeButton">
            <LikeButton />
          </Muestra>
          <Muestra nombre="Toggle" descripcion="Interruptor con rebote" ruta="Components/Buttons/Toggle">
            <Toggle />
          </Muestra>
          <Muestra nombre="CopyButton" descripcion="Copia un comando al portapapeles" ruta="Components/Buttons/CopyButton" ancha>
            <CopyButton />
          </Muestra>
        </Seccion>

        <Seccion id="pasarelas" titulo="Pasarelas" cantidad={4} variante="galeria_ancha" descripcion="Carruseles, sliders y galerías para mostrar contenido.">
          <Muestra nombre="Marquee" descripcion="Fila infinita que se pausa al pasar" ruta="Components/Pasarelas/Marquee" llenar completa>
            <Marquee />
            <Marquee reversa elementos={['Diseño', 'Código', 'Movimiento', 'Accesible', 'Rápido', 'Ligero']} />
          </Muestra>
          <Muestra nombre="Slider" descripcion="Automático, con flechas y puntos" ruta="Components/Pasarelas/Slider" llenar>
            <Slider />
          </Muestra>
          <Muestra nombre="ExpandGallery" descripcion="Paneles que se expanden" ruta="Components/Pasarelas/ExpandGallery" llenar>
            <ExpandGallery />
          </Muestra>
          <Muestra nombre="Carrusel" descripcion="Scroll nativo con snap y flechas" ruta="Components/Pasarelas/Carrusel" llenar completa>
            <DemoCarrusel />
          </Muestra>
        </Seccion>

        <Seccion id="animaciones" titulo="Animaciones" cantidad={6} descripcion="Texto, cargas y apariciones con movimiento.">
          <Muestra nombre="Typewriter" descripcion="Escribe y borra frases" ruta="Components/Animaciones/Typewriter">
            <Typewriter />
          </Muestra>
          <Muestra nombre="WaveText" descripcion="Letras en forma de ola" ruta="Components/Animaciones/WaveText">
            <WaveText />
          </Muestra>
          <Muestra nombre="GradientText" descripcion="Degradado que se desplaza" ruta="Components/Animaciones/GradientText">
            <GradientText>Degradado</GradientText>
          </Muestra>
          <Muestra nombre="Loader" descripcion="4 tipos de carga" ruta="Components/Animaciones/Loader">
            <DemoLoaders />
          </Muestra>
          <Muestra nombre="Reveal" descripcion="Aparece al entrar en pantalla" ruta="Components/Animaciones/Reveal">
            <DemoReveal />
          </Muestra>
          <Muestra nombre="Skeleton" descripcion="Silueta mientras carga" ruta="Components/Animaciones/Skeleton" llenar>
            <Skeleton />
          </Muestra>
        </Seccion>

        <Seccion id="interfaz" titulo="Interfaz" cantidad={7} descripcion="Piezas de formulario y navegación para cualquier app.">
          <Muestra nombre="Accordion" descripcion="Abre y cierra con altura suave" ruta="Components/Interfaz/Accordion" llenar ancha>
            <Accordion />
          </Muestra>
          <Muestra nombre="Tabs" descripcion="Indicador que se desliza" ruta="Components/Interfaz/Tabs" llenar>
            <Tabs />
          </Muestra>
          <Muestra nombre="FloatingInput" descripcion="Etiqueta que flota al escribir" ruta="Components/Interfaz/FloatingInput" llenar>
            <DemoInputs />
          </Muestra>
          <Muestra nombre="Tooltip" descripcion="4 posiciones, con teclado" ruta="Components/Interfaz/Tooltip">
            <DemoTooltips />
          </Muestra>
          <Muestra nombre="Modal" descripcion="<dialog> nativo con fondo borroso" ruta="Components/Interfaz/Modal">
            <Modal />
          </Muestra>
          <Muestra nombre="Toast" descripcion="Avisos que se van solos" ruta="Components/Interfaz/Toast">
            <Toast />
          </Muestra>
          <Muestra nombre="ProgressBar" descripcion="Rayas animadas; verde al 100%" ruta="Components/Interfaz/ProgressBar" llenar ancha>
            <DemoProgreso />
          </Muestra>
        </Seccion>
      </main>

      <footer className="pie">
        Cada carpeta trae su <code>.jsx</code> y su <code>.module.css</code>. Copia la carpeta completa.
      </footer>
    </>
  )
}

export default App
